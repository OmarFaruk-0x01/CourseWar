import { FC } from "react";
type badgeType = "subscribed" | "non-subscribed";

interface BadgeProps {
  title: string;
  type: badgeType;
}

const Badge: FC<BadgeProps> = ({title, type}) => {
    switch (type) {
        case 'subscribed':
            null;
            // return <div></div>
    }
    return <span className={` py-1 px-2 bg-primary-100 text-xs text-primary-600 rounded-full flex flex-row-reverse items-center justify-center gap-2`}><span className="w-2 h-2 rounded-full bg-primary-600 block"/>{title}</span>;
};

export default Badge;
