import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/hackrplay/2022/home");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Layout title="ReactPlay presents HACK-R-PLAY"></Layout>;
}
