import { FunctionComponent } from "react";
import Avatar from "./Avatar";
import styles from "../styles/Home.module.css";
import { notifications } from "../data";

interface NotificationsProps {}

const Notifications: FunctionComponent<NotificationsProps> = () => {
  return (
    <div className={`${styles.containerCard} flex flex-col gap-[1.15rem]`}>
      <div className="flex justify-between text-sm text-white ">
        <p className="font-semibold">Notifications</p>
        <p className="cursor-pointer">View All</p>
      </div>
      {notifications.map((notification, index) => (
        <div key={index} className="flex gap-3">
          <Avatar
            alt={notification.alt}
            src={notification.src}
            width="w-10"
            borderRadius="rounded-full"
          />
          <div className="flex flex-col text-sm">
            <p className="font-semibold text-white">{notification.collectionName}</p>
            <small>Has Been Sold for {notification.priceSold} ETH</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
