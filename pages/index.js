import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

export default function Home() {
  const router = useRouter();

  return <Layout title="ReactPlay presents HACK-R-PLAY"></Layout>;
}
