import { FC } from "react";
import { Guild } from "../../utils/types";
import styles from "../../utils/styles/menu.module.scss";
import Image from "next/image";

type Props = {
  guild: Guild[];
};

export const GuildMenuItem: FC<any> = ({ guild }) => {
  return (
    <div className={styles.serverCard}>
      {guild.icon ? (
        <Image
          src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}`}
          width={128}
          height={128}
          className={styles.serverCardIcon}
        />
      ) : (
        <div className={styles.serverCardIconNull}>
          <div>{guild.name.split("")[0]}</div>
        </div>
      )}
      <p className={styles.serverCardName}>{guild.name}</p>
    </div>
  );
};
