import { FC } from "react";
interface IconTextProps {
  icon: JSX.Element;
  title: string;
}
const IconText: FC<IconTextProps> = ({ icon, title }) => {
  return (
    <div className="flex items-center justify-center gap-1">
      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-500 border-gray-200 border text-sm">
        {icon}
      </span>
      <span className="text-sm text-gray-500">{title}</span>
    </div>
  );
};

export default IconText;
