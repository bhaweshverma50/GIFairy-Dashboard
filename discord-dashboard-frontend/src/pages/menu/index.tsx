import { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import { fetchMutualGuilds } from "../../utils/api";
import { Guild } from "../../utils/types";
import styles from "../../utils/styles/menu.module.scss";
import { GuildMenuItem } from "../../components/guilds/GuildMenuItem";

type Props = {
  guilds: Guild[];
};

const MenuPage: NextPage<Props> = ({ guilds }) => {
  return (
    <div className={styles.menuContainer}>
      <Head>
        <title>GIFairy | Menu</title>
      </Head>
      <h1>Select a server to configure</h1>
      <div className={styles.serverCardContainer}>
        {guilds.map((guild) => (
          <div key={guild.id}>
            <GuildMenuItem guild={guild} />
            <GuildMenuItem guild={guild} />
            <GuildMenuItem guild={guild} />
            <GuildMenuItem guild={guild} />
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return fetchMutualGuilds(context);
}

export default MenuPage;
