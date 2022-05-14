import { FunctionComponent } from "react";
import Avatar from "./Avatar";
import styles from "../styles/Home.module.css";

interface StatisticsProps {}

const Statistics: FunctionComponent<StatisticsProps> = () => {
  return (
    <div className={`${styles.containerCard} flex flex-col gap-4`}>
      <div className="flex justify-between text-sm text-white">
        <p className="text-sm font-semibold text-white">Statistics</p>
        <p className="cursor-pointer">View All</p>
      </div>
      <div className="flex flex-col gap-2 -mx-4">
        <Avatar
          width="w-full"
          src="/statistics.jpg"
          alt="Statistics"
          borderRadius="rounded-none"
        />
        <div className="flex justify-between p-4 text-sm font-semibold text-white">
          <p>Jan</p>
          <p>Feb</p>
          <p>Mar</p>
          <p>Apr</p>
          <p>May</p>
          <p>Jun</p>
        </div>
      </div>
      <div className="flex justify-between px-4 py-3 text-sm font-semibold text-white bg-secondary rounded-2xl">
        <p>Artwork Sold</p>
        <p>212</p>
      </div>
      <div className="flex justify-between px-4 py-3 text-sm font-semibold text-white bg-secondary rounded-2xl">
        <p>Artwork Cancel</p>
        <p>212</p>
      </div>
      <div className="flex justify-between px-4 py-3 text-sm font-semibold text-white bg-secondary rounded-2xl">
        <p>Total Earninig</p>
        <p>9.99 ETH</p>
      </div>
    </div>
  );
};

export default Statistics;
