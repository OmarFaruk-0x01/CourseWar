import { FC } from "react";
import { TextViewProps } from "./index.interface";

const TextView: FC<TextViewProps> = ({ title, ...props }) => {
  return (
    <p className="line-clamp-1" {...props}>
      {title}
    </p>
  );
};

export default TextView;
