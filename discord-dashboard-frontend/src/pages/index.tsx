import type { NextPage } from "next";
import Head from "next/head";
import styles from "../utils/styles/login.module.scss";
import { FaDiscord } from "react-icons/fa";

const Home: NextPage = () => {
  const handleClick = async () => {
    window.location.href = "http://localhost:3001/api/auth/discord";
  };
  return (
    <div className="page">
      <Head>
        <title>GIFairy | Home</title>
      </Head>
      <div className={styles.heroContainer}>
        <h1>Welcome to GIFairy Bot Dashboard</h1>
        <p>
          Hello there! Thank you for showing interest in GIFairy, the ultimate
          discord bot. I am Bhawesh who developed this as a fun little project
          and it turned out to be such a huge combination of interesting
          features and functions.
        </p>
        <p>
          To know more about this bot, why not try adding it to your server if
          not already. Explore all you can without spending a single penny. Just
          login with your discord account using below button and the rest will
          be super easy.
        </p>
        <div className={styles.loginButton}>
          <button onClick={handleClick}>
            <FaDiscord size={35} />
            <span>Login with Discord</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
