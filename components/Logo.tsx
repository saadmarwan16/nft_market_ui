import { FunctionComponent } from "react";
import styles from "../styles/Home.module.css";

interface LogoProps {}

const Logo: FunctionComponent<LogoProps> = () => {
  return <p className={`${styles.sidebarIconSize} font-bold`}>A.</p>;
};

export default Logo;
