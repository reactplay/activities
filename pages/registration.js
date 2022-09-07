import { useAuthenticationStatus, useUserData } from "@nhost/react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { NHOST } from "../services/nhost";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const userData = useUserData();
  const router = useRouter();

  useEffect(() => {
    console.log(isLoading, isAuthenticated);
    if (!isLoading) {
      if (!isAuthenticated) {
        const external_path = NHOST.AUTH_URL(
          `http://localhost:${
            process.env.NEXT_PUBLIC_DEV_PORT ?? "3000"
          }/registration`
        );
        router.push(external_path, undefined, { shallow: true });
      }
    }
  }, [isLoading]);

  if (!isAuthenticated) {
    return null;
  }

  if (isLoading) {
    return <div>Loading user information. Please wait...</div>;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome <strong>{userData.displayName}</strong>, to nhost-reactplay
          hackathon
        </h1>
        <Link href="/">
          <a>
            <h2>Home</h2>
          </a>
        </Link>
      </main>
    </div>
  );
}
