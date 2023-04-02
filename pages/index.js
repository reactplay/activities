import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import { Config } from "../services/metadata/home";
import MediaLayout from "@/components/MediaLayout";

export default function Home() {
  const reactPlayLive = [
    { id: 0, src: "https://www.youtube.com/embed/1qfDkmtuWqg" },
    { id: 1, src: "https://www.youtube.com/embed/b0eas9xxD-E" },
    { id: 2, src: "https://www.youtube.com/embed/w0nd4ASTDdg" },
  ];

  const EventLayout = () => {
    return (
      <div className="w-full">
        <Banner />
        <MediaLayout events={Config.events} title="Events" id="events" />
        <MediaLayout
          videoLinks={reactPlayLive}
          title="ReactPlay Live"
          id="live"
        />
        <MediaLayout
          twitterLinks={Config.twitterSpaces}
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
