import { ButtonHTMLAttributes } from "react";
import { IconBaseProps, IconType } from "react-icons";

export type ButtonContent = "icon" | "text" | "icon-text" | "text-icon";
export type ButtonSizes =
  | "regular"
  | "regular-v2"
  | "small"
  | "medium"
  | "large";
export type ButtonType =
  | "primary"
  | "secondary"
  | "tertiary"
  | "critical"
  | "link"
  | "drop_text";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  buttonSizes?: ButtonSizes;
  buttonType?: ButtonType;
  buttonContent: ButtonContent;
  buttonIcon: IconType;
  extentClassName?: string;
  iconProps?: IconBaseProps;
}

