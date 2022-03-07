import styles from "../../utils/styles/dashboard.module.scss";
import Image from "next/image";
import { RiMenu3Line } from "react-icons/ri";

export const Appbar = () => {
  return (
    <div className={styles.appbar}>
      <div className={styles.menu}>
        <p>Dashboard</p>
      </div>
      <div className={styles.menu}>
        <p>Lachico's Server</p>
        <img
          className={styles.guildImg}
          src="/GIFairy Remastered 1.png"
          alt="guild_avatar"
        />
      </div>
    </div>
  );
};
