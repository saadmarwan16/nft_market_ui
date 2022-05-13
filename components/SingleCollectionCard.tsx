import { FunctionComponent } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BsCheck } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import Avatar from "./Avatar";

interface SingleCollectionCardProps {}

const SingleCollectionCard: FunctionComponent<
  SingleCollectionCardProps
> = () => {
  return (
    <div className="flex w-2/3 gap-6 p-3 bg-neutral rounded-2xl">
      <div className="flex flex-col items-center relative w-1/2">
        <div className="grow avatar w-full">
          <Image
            src="/profile.jpg"
            alt="Explosion of Colors"
            layout="fill"
            className="rounded-xl"
          />
        </div>
        <div className="absolute bottom-3 text-white opacity-70 font-semibold rounded-lg px-6 py-2 bg-neutral">
          <p>15h: 32m: 17s</p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <h3 className="text-lg text-white font-semibold">
          Explosion of Colors #8
        </h3>
        <div className="flex gap-3">
          <Avatar
            width="w-12"
            src="/profile.jpg"
            alt="Explosion of Colors"
            borderRadius="rounded-full"
          />
          <div>
            <p className="text-white font-semibold text-sm">
              Explosion of Colors by AIIV
            </p>
            <div className="flex gap-6">
              <small>@AIIV - AIMC Collections</small>
              <span className="p-0.5 rounded-full bg-primary">
                <BsCheck className="text-white" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p>Current Bid</p>
          <div className="flex justify-between text-white font-semibold text-sm">
            <div className="flex gap-2">
              <span className="bg-secondary rounded-full p-1.5">
                <FaEthereum className="text-white" />
              </span>
              <p>3.69 ETH</p>
            </div>
            <div>
              <p>$ 970.76</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
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
