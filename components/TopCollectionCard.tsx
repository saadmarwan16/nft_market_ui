import { FunctionComponent } from "react";
import Avatar from "./Avatar";

interface TopCollectionCardProps {}

const TopCollectionCard: FunctionComponent<TopCollectionCardProps> = () => {
  return (
    <div className="p-4 bg-neutral rounded-xl flex flex-col gap-4">
      <div className="flex gap-2 item-center">
        <Avatar
          alt="Profile"
          width="w-10"
          borderRadius="rounded-full"
          src="/profile.jpg"
        />
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold text-white leading-3">Marwan</p>
          <small>@msaad19</small>
        </div>
      </div>
      <Avatar
        alt="Top Collection"
        width="w-full"
        borderRadius="rounded-xl"
        src="/profile.jpg"
      />
      <div className="flex justify-between text-white font-semibold text-sm">
        <p>Explosion of color</p>
        <p>#.01</p>
      </div>
      <div>
        <div className="flex justify-between text-sm">
          <p>Current Bid</p>
          <p>Ending In</p>
        </div>
        <div className="flex justify-between text-white text-sm">
          <p>5.54 Eth</p>
          <p>12h 21m</p>
        </div>
      </div>
    </div>
  );
};

export default TopCollectionCard;
