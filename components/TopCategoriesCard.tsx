import { FunctionComponent } from "react";
import Avatar from "./Avatar";
import styles from "../styles/Home.module.css";
import { topCategories } from "../data";

interface TopCategoriesCardProps {}

const TopCategoriesCard: FunctionComponent<TopCategoriesCardProps> = () => {
  return (
    <div className={`${styles.containerCard} w-1/3 h-72 flex flex-col gap-4`}>
      <div className="flex justify-between text-sm">
        <h4 className="font-semibold text-white">Top Categories</h4>
        <p className="cursor-pointer">View all</p>
      </div>
      <div className="flex flex-col justify-center gap-3 pt-16 pr-2 overflow-y-auto">
        {topCategories.map((topCategory, index) => (
          <div
            key={index}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <small>{topCategory.rank}</small>
              <Avatar
                width="w-8"
                src={topCategory.src}
                borderRadius="rounded-full"
                alt={topCategory.alt}
              />
              <div>
                <p className="text-white leading-[10px] font-semibold text-sm">
                  {topCategory.name}
                </p>
                <small>{topCategory.username}</small>
              </div>
            </div>
            <button
              className={`${
                topCategory.isFollowing
                  ? `${styles.buttonPrimary}`
                  : `${styles.buttonSecondary}`
              } text-xs font-light min-h-[24px] h-2 pl-2 pr-2 !important`}
            >
              {topCategory.isFollowing ? "Following" : "Follow"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategoriesCard;
