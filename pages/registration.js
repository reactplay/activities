import { useAuthenticationStatus, useUserData } from "@nhost/nextjs";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { NHOST } from "../services/nhost";
import { useEffect, useState } from "react";

export default function Home() {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const [isDataLoading, setIsDataLoading] = useState(true);

  const userData = useUserData();

  const initializeData = () => {
    // Write your initialization snippets here
    console.log(userData);
    setIsDataLoading(false);
  };

  useEffect(() => {
    console.log(isLoading, isAuthenticated);
    if (!isLoading) {
      if (!isAuthenticated) {
        if (typeof window !== "undefined") {
          const external_path = NHOST.AUTH_URL(
            `http://${window.location.hostname}${
              process.env.NEXT_PUBLIC_DEV_PORT
                ? `:${process.env.NEXT_PUBLIC_DEV_PORT}`
                : ""
            }/registration`
          );

          window.location = external_path;
        }
      } else {
        initializeData();
      }
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h5 className={styles.title}>
            Loading authentication information. Please wait.
          </h5>
        </main>
      </div>
    );
  }

  if (isDataLoading) {
    return <div>Loading data information. Please wait...</div>;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome <strong>{userData.displayName}</strong>, to the hackathon
        </h1>
        <Link href="/">
          <a>
            <h2>Home</h2>
          </a>
        </Link>
      </main>
    </div>
  );
  return null;
}
