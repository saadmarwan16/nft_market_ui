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
import Logo from "./Logo";

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  return (
    <div className="fixed flex-col items-center justify-between hidden w-16 min-h-screen py-10 lg:flex bg-neutral">
      <div className="flex flex-col gap-32">
        <Logo />
        <div className="flex flex-col gap-6">
          <div className="w-full p-1 rounded-md bg-secondary">
            <MdDashboard className={styles.sidebarIconSize} />
          </div>
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
