import { useAuthenticationStatus, useUserData } from "@nhost/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { NHOST } from "../services/nhost";
import { useState } from "react";

export default function Home() {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const { authAttempt, setAuthAttempt } = useState(1);
  const userData = useUserData();

  if (!isAuthenticated) {
    if (typeof window !== "undefined" && authAttempt <= 5) {
      setAuthAttempt(authAttempt + 1);
      console.log(`Authentication attempt ${authAttempt}`);
      window.location = NHOST.AUTH_URL(
        `http://localhost:${
          process.env.RAECT_APP_DEV_PORT ?? "3000"
        }/registration`
      );
    }
    return null;
  }
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Welcome <strong>{userData.displayName}</strong>, to nhost-reactplay
        hackathon
      </h3>
      <Link href="/">
        <a>
          <h2>Home</h2>
        </a>
      </Link>
    </div>
  );
}
