import { HTMLAttributes, DetailedHTMLProps } from "react";
import { IconType, IconBaseProps } from "react-icons";

export interface DashIconProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  _Icon?: IconType;
  _iconProps?: IconBaseProps;
  clickable?: boolean;
  extentClassName?: string;
}
