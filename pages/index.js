import { useEffect } from "react";
import { useRouter } from "next/router";

const PAGE_SIZE = 12;

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/hackrplay/2022/home");
  }, []);
  return null;
};

export default HomePage;
