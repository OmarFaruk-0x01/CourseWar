import { ButtonHTMLAttributes, } from "react";
export type AvatarColor =  "orange" | "primary" | "green" | "neonblue";
export type AvatarSizes = "medium" | "large";


export interface AvatarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  avatarSizes: AvatarSizes;
  avatarImage?: string;
  avatarColor: AvatarColor;
  extentClassName?: string;
}

