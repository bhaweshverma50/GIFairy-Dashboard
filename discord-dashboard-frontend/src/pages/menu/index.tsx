import { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import { fetchMutualGuilds } from "../../utils/api";
import { Guild } from "../../utils/types";
import styles from "../../utils/styles/menu.module.scss";
import { GuildMenuItem } from "../../components/guilds/GuildMenuItem";
import { useRouter } from "next/router";

type Props = {
  guilds: Guild[];
};

const MenuPage: NextPage<any> = ({ guilds }) => {
  const router = useRouter();
  return (
    <div className={styles.menuContainer}>
      <Head>
        <title>GIFairy | Menu</title>
      </Head>
      <h1>Select a server to configure</h1>
      <div className={styles.serverCardContainer}>
        {guilds.map((guild: any) => (
          <div
            key={guild.id}
            onClick={() => router.push(`/dashboard/${guild.id}`)}
          >
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
