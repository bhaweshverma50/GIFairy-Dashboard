import Image from "next/image";
import { MdSpaceDashboard } from "react-icons/md";
import { BsTerminal } from "react-icons/bs";
import { FaWrench } from "react-icons/fa";
import { RiLogoutCircleLine, RiMenu3Line } from "react-icons/ri";
import styles from "../../utils/styles/dashboard.module.scss";
import { useRouter } from "next/router";

const routes = [
  {
    name: "Dashboard",
    icon: <MdSpaceDashboard size={38} />,
    getPath: (id: string) => `/dashboard/${id}`,
  },
  {
    name: "Commands",
    icon: <BsTerminal size={38} />,
    getPath: (id: string) => `/dashboard/${id}/commands`,
  },
  {
    name: "Settings",
    icon: <FaWrench size={38} />,
    getPath: (id: string) => `/dashboard/${id}/settings`,
  },
];

export const Sidebar = () => {
  const router = useRouter();
  return (
    <div className={styles.sidebar}>
      <RiMenu3Line
        className={styles.endBtn}
        size={38}
        onClick={() => router.push("/menu")}
      />
      <div className={styles.icons}>
        {routes.map((route) => (
          <div
            key={route.name}
            onClick={() => {
              router.push(route.getPath(router.query?.id!.toString()));
            }}
          >
            {route.icon}
          </div>
        ))}
      </div>
      <div>
        <RiLogoutCircleLine className={styles.endBtn} size={38} />
      </div>
    </div>
  );
};
