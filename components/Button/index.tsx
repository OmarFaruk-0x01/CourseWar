import { FC } from "react";
import { IconType } from "react-icons";
import { ButtonProps } from "./index.interface";
import {
  getButtonContent,
  getButtonSizes,
  getButtonType,
} from "./index.styles";

const Button: FC<ButtonProps> = ({
  buttonContent,
  buttonSizes = "regular",
  buttonType = "tertiary",
  buttonIcon,
  extentClassName,
  title,
  iconProps,
  ...props
}) => {
  function renderIcon() {
    if (buttonContent.includes("icon")) {
      const Icon = buttonIcon as IconType;
      return (
        <div>
          <Icon {...iconProps} />
        </div>
      );
    }
    return <></>;
  }

  function renderText() {
    if (buttonContent.includes("text")) return <p>{title}</p>;
  }

  return (
    <button
      className={`
      ${extentClassName}
      ${getButtonSizes(buttonSizes)}
      ${getButtonContent(buttonContent)}
      ${getButtonType(buttonType)}
      flex p-2 gap-1 items-center justify-center m-1 rounded-md transition-colors disabled:bg-slate-200 disabled:cursor-not-allowed disabled:text-gray-400
      `}
      {...props}
    >
      {renderText()}
      {renderIcon()}
    </button>
  );
};

export default Button;
