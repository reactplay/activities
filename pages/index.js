import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import { Config } from "../services/metadata/home";
import MediaLayout from "@/components/MediaLayout";
import EventSection from "@/components/event/EventSection";
import { useEffect, useState } from "react";
import { REACT_PLAYLIST_ID } from "config";
import { events } from "@/services/metadata/events";

export default function Home() {
  const reactPlayLive = [
    { id: 0, src: "https://www.youtube.com/embed/d36eeq0w1ug" },
    { id: 1, src: "https://www.youtube.com/embed/ECQhkGweF90" },
    { id: 2, src: "https://www.youtube.com/embed/9OVKqxvOsfY" },
  ];

  const EventLayout = () => {
    return (
      <div className="w-full">
        <Banner events={events} />
        <EventSection events={events} />
        <MediaLayout
          aLayout
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
    <Layout
      hustleHomePage={true}
      title="The Hustle Home page"
      metainfo={Config}
    >
      <EventLayout />
    </Layout>
  );
}
