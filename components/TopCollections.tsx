import { FunctionComponent } from "react";
import styles from "../styles/Home.module.css";
import TopCollectionCard from "./TopCollectionCard";

interface TopCollectionsProps {}

const TopCollections: FunctionComponent<TopCollectionsProps> = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl text-white font-bold">Top Collections</h2>
      <div className="flex gap-4">
        <button className={styles.buttonPrimary}>Collections</button>
        <button className={styles.buttonSecondary}>Gaming</button>
        <button className={styles.buttonSecondary}>Illustrations</button>
        <button className={styles.buttonSecondary}>Games</button>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[0, 1, 2, 3, 4, 5].map((num) => (
          <TopCollectionCard key={num} />
        ))}
      </div>
    </div>
  );
};

export default TopCollections;
