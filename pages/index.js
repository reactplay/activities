import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("events/22/hackrplay");
  }, []);

  return <Layout title="ReactPlay : #2Plays-A-Month"></Layout>;
}
