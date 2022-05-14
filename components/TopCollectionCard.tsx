import { FunctionComponent } from "react";
import Avatar from "./Avatar";
import styles from "../styles/Home.module.css";
import { ITopCollection } from "../interfaces";

interface TopCollectionCardProps {
  topCollection: ITopCollection;
}

const TopCollectionCard: FunctionComponent<TopCollectionCardProps> = ({
  topCollection: {
    collectionAlt,
    collectionName,
    collectionNumber,
    collectionSrc,
    currentBid,
    endingIn,
    ownerAlt,
    ownerName,
    ownerSrc,
    username,
  },
}) => {
  return (
    <div className={`${styles.containerCard} flex flex-col gap-4`}>
      <div className="flex gap-2 item-center">
        <Avatar
          alt={ownerAlt}
          width="w-10"
          borderRadius="rounded-full"
          src={ownerSrc}
        />
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold leading-3 text-white">
            {ownerName}
          </p>
          <small>{username}</small>
        </div>
      </div>
      <Avatar
        alt={collectionAlt}
        width="w-full"
        borderRadius="rounded-xl"
        src={collectionSrc}
      />
      <div className="flex justify-between text-sm font-semibold text-white">
        <p>{collectionName}</p>
        <p>{collectionNumber}</p>
      </div>
      <div>
        <div className="flex justify-between text-sm">
          <p>Current Bid</p>
          <p>Ending In</p>
        </div>
        <div className="flex justify-between text-sm text-white">
          <p>{currentBid} Eth</p>
          <p>{endingIn}</p>
        </div>
      </div>
    </div>
  );
};

export default TopCollectionCard;
