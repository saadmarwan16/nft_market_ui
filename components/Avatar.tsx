import { FunctionComponent } from "react";
import Image from "next/image";

interface AvatarProps {
  width: string;
  src: string;
  alt: string;
  borderRadius: string;
}

const Avatar: FunctionComponent<AvatarProps> = ({
  width,
  src,
  alt,
  borderRadius,
}) => {
  return (
    <div className="avatar">
      <div className={width}>
        <Image src={src} alt={alt} layout="fill" className={borderRadius} />
      </div>
    </div>
  );
};

export default Avatar;
