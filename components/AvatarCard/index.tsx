import { FC } from "react";
import Avatar from "../Avatar";

interface AvatarCardProps {
  title: string;
  subtitle?: string;
  imgUrl?: string;
}

const AvatarCard: FC<AvatarCardProps> = ({ title, subtitle, imgUrl }) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar
        avatarColor="orange"
        avatarSizes="medium"
        title={title}
        avatarImage={imgUrl}
      />
      <div className="grid">
        <h4 className="font-medium">{title}</h4>
        {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
      </div>
    </div>
  );
};

export default AvatarCard;
