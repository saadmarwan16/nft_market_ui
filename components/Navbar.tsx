import { FunctionComponent } from "react";
import styles from "../styles/Home.module.css";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./Logo";
import Input from "./Input";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <div className="flex items-center justify-between lg:hidden">
      <div className="flex items-center gap-4">
        <GiHamburgerMenu className={styles.sidebarIconSize} />
        <Logo />
      </div>
      <BsSearch className={`${styles.sidebarIconSize} block md:hidden`} />
      <Input />
    </div>
  );
};

export default Navbar;
