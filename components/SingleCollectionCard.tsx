import { FunctionComponent } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BsCheck } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import Avatar from "./Avatar";
import { singleTopCollection } from "../data";

interface SingleCollectionCardProps {}

const SingleCollectionCard: FunctionComponent<
  SingleCollectionCardProps
> = () => {
  return (
    <div className={`${styles.containerCard} flex w-full md:w-2/3 lg:w-full xl:w-2/3 h-auto xl:h-72 flex-col lg:flex-row gap-6`}>
      <div className="relative flex flex-col items-center w-full lg:w-1/2 aspect-square">
        <div className="w-full grow avatar">
          <Image
            src={singleTopCollection.collectionSrc}
            alt={singleTopCollection.collectionAlt}
            layout="fill"
            className="rounded-xl"
          />
        </div>
        <div className="absolute px-6 py-2 font-semibold text-white rounded-lg bottom-3 opacity-70 bg-neutral">
          <p>{singleTopCollection.endingIn}</p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <h3 className="text-lg font-semibold text-white">
          {singleTopCollection.collectionName} {singleTopCollection.collectionNumber}
        </h3>
        <div className="flex gap-3">
          <Avatar
            width="w-12"
            src={singleTopCollection.ownerSrc}
            alt={singleTopCollection.ownerAlt}
            borderRadius="rounded-full"
          />
          <div>
            <p className="text-sm font-semibold text-white">
              {singleTopCollection.ownerName}
            </p>
            <div className="flex gap-6">
              <small>{singleTopCollection.username}</small>
              <span className="p-0.5 rounded-full bg-primary">
                <BsCheck className="text-white" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p>Current Bid</p>
          <div className="flex justify-between text-sm font-semibold text-white">
            <div className="flex gap-2">
              <span className="bg-secondary rounded-full p-1.5">
                <FaEthereum className="text-white" />
              </span>
              <p>{singleTopCollection.currentBid} ETH</p>
            </div>
            <div>
              <p>$ 8, 632.68</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <span className={`${styles.buttonSecondary} normal-case`}>
            View Artwork
          </span>
          <span className={styles.buttonPrimary}>Place Bid</span>
        </div>
      </div>
    </div>
  );
};

export default SingleCollectionCard;
