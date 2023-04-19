import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import { Config } from "../services/metadata/home";
import MediaLayout from "@/components/MediaLayout";
import { useEffect, useState } from "react";
import { REACT_PLAYLIST_ID } from "config";

export default function Home() {
  const [reactPlayLive, setReactPlayLive] = useState([]);

  useEffect(() => {
    const getPlayListData = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&part=id,snippet&maxResults=3&playlistId=${REACT_PLAYLIST_ID}`
      );
      const json = await response.json();
      console.log(json);
      const urls = json?.items?.map((item, index) => ({
        id: index,
        src: `https://www.youtube.com/embed/${item.snippet?.resourceId?.videoId}`,
      }));
      setReactPlayLive(urls);
    };
    getPlayListData();
  }, []);

  const EventLayout = () => {
    return (
      <div className="w-full">
        <Banner />
        <MediaLayout events={Config.events} title="Events" id="events" />
        <MediaLayout
          reactPlayLive={reactPlayLive}
          title="ReactPlay Live"
          id="live"
        />
        <MediaLayout
          twitterSpaces={Config.twitterSpaces}
          title="Twitter Spaces"
          id="spaces"
        />
      </div>
    );
  };

  return (
    <Layout title="The Hustle Home page" metainfo={Config}>
      <EventLayout />
    </Layout>
  );
}
