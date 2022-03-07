import Head from "next/head";
import { ReactElement } from "react";
import { Appbar } from "../misc/Appbar";
import { Sidebar } from "../misc/Sidebar";
import styles from "../../utils/styles/dashboard.module.scss";

export function DashboardLayout({ children }: { children: ReactElement }) {
  return (
    <>
      <Head>
        <title>GIFairy | Dashboard</title>
      </Head>
      <Sidebar />
      <div className={styles.layout}>
        <Appbar />
        <>{children}</>
      </div>
    </>
  );
}
