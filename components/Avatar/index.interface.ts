import { ButtonHTMLAttributes, DetailedHTMLProps, } from "react";
export type AvatarColor =  "orange" | "primary" | "green" | "neonblue";
export type AvatarSizes = "medium" | "large";


export interface AvatarProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
  avatarSizes: AvatarSizes;
  avatarImage?: string;
  avatarColor: AvatarColor;
  extentClassName?: string;
}

