import { FunctionComponent } from "react";
import Avatar from "./Avatar";
import styles from "../styles/Home.module.css";
import { topCategories } from "../data";

interface TopCategoriesCardProps {}

const TopCategoriesCard: FunctionComponent<TopCategoriesCardProps> = () => {
  return (
    <div className="w-1/3 h-72 p-4 bg-neutral rounded-xl flex flex-col gap-4">
      <div className="flex justify-between text-sm">
        <h4 className="text-white font-semibold">Top Categories</h4>
        <p className="cursor-pointer">View all</p>
      </div>
      <div className="flex flex-col gap-3 justify-center overflow-auto pt-16">
        {topCategories.map((topCategory) => (
          <div
            key={topCategory.id}
            className="flex justify-between items-center"
          >
            <div className="flex gap-2 items-center">
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
