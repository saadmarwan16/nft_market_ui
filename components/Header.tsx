import { FunctionComponent } from "react";
import { AiOutlineWallet } from "react-icons/ai";
import { RiMessage3Line, RiNotification3Line } from "react-icons/ri";
import styles from "../styles/Home.module.css";
import Image from "next/image";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <div className="flex justify-between">
      <input
        type="text"
        placeholder="Search for transaction, item etc"
        className="w-full max-w-lg text-white input bg-neutral placeholder:text-white"
      />
      <div className="flex gap-5">
        <span className="gap-3 text-white hover:bg-secondary btn bg-neutral">
          <AiOutlineWallet className="text-2xl" />
          9.999 ETH
        </span>
        <span className={styles.headerIcon}>
          <RiMessage3Line />
          <span className={`${styles.headerIconBadge} badge badge-xs`}></span>
        </span>
        <span className={styles.headerIcon}>
          <RiNotification3Line />
          <span className={`${styles.headerIconBadge} badge badge-xs`}></span>
        </span>
        <span className="gap-4 text-white normal-case btn hover:bg-secondary">
          <div className="avatar">
            <div className="w-8">
              <Image src='/profiles/profile_me.jpg' layout="fill" alt="Profile" className="rounded-full" />
            </div>
          </div>
          <p>Marwan.S</p>
        </span>
      </div>
    </div>
  );
};

export default Header;
