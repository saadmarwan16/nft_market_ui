import { FunctionComponent } from "react";
import { topCollections } from "../data";
import styles from "../styles/Home.module.css";
import TopCollectionCard from "./TopCollectionCard";

interface TopCollectionsProps {}

const TopCollections: FunctionComponent<TopCollectionsProps> = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-white">Top Collections</h2>
      <div className="flex gap-4 pb-4 overflow-x-auto">
        <button className={styles.buttonPrimary}>Collections</button>
        <button className={styles.buttonSecondary}>Gaming</button>
        <button className={styles.buttonSecondary}>Illustrations</button>
        <button className={styles.buttonSecondary}>Games</button>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {topCollections.map((topCollection, index) => (
          <TopCollectionCard key={index} topCollection={topCollection} />
        ))}
      </div>
    </div>
  );
};

export default TopCollections;
