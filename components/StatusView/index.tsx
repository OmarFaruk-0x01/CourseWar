import { FC } from "react";
import { StatusViewPorps } from "./index.interface";
import { getStateColor } from "./index.styles";

const StatusView: FC<StatusViewPorps> = ({ state, showText, ...props }) => {
  return (
    <div className="relative" {...props}>
      <span
        style={{ content: "" }}
        className={`after:absolute ${
          !showText ? "after:right-[50%]" : ""
        } after:translate-x-2 ${
          showText ? "after:top-2" : ""
        } after:-top-1 tablet:after:top-1 after:w-2 after:h-2 after:rounded-full ${getStateColor(
          state
        )}`}
      >
        {showText ? state : ""}
      </span>
    </div>
  );
};

export default StatusView;
