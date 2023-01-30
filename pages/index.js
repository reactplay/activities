import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("events/23/twoplaysamonth");
  }, []);

  return <Layout title='ReactPlay : #2Plays-A-Month' metainfo={{
    name: "twoplaysamonth",
    display: "#2PlaysAMonth",
    description: "#2PlaysAMonth is an event by ReactPlay for the ReactJs community to learn, build, share in public. Join us.",
    keywords: "ReactPlay, #2PlaysAMonth, ReactJS",
  }}></Layout>;
}
