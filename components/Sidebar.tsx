import { FunctionComponent } from "react";
import { MdDashboard } from "react-icons/md";
import { AiOutlineShoppingCart, AiOutlineWallet } from "react-icons/ai";
import {
  IoDocumentTextOutline,
  IoSettings,
  IoLogOutSharp,
} from "react-icons/io5";
import { BsFileBarGraph } from "react-icons/bs";
import styles from "../styles/Home.module.css";

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  return (
    <div className="flex flex-col items-center justify-between w-16 fixed min-h-screen py-10 bg-neutral">
      <div className="flex flex-col gap-32">
        <p className={`${styles.sidebarIconSize} font-bold`}>A.</p>
        <div className="flex flex-col gap-6">
          <MdDashboard className={styles.sidebarIconSize} />
          <AiOutlineWallet className={styles.sidebarIconSize} />
          <AiOutlineShoppingCart className={styles.sidebarIconSize} />
          <IoDocumentTextOutline className={styles.sidebarIconSize} />
          <BsFileBarGraph className={styles.sidebarIconSize} />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <IoSettings className={styles.sidebarIconSize} />
        <IoLogOutSharp className={styles.sidebarIconSize} />
      </div>
    </div>
  );
};

export default Sidebar;
