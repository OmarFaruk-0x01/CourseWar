import { AvatarColor, AvatarSizes } from "./index.interface";

export function getAvatarSizes(avatarSizes: AvatarSizes): string {
  switch (avatarSizes) {
    case "medium":
      return "w-10 h-10 text-sm";
    case "large":
      return "w-14 h-14 text-md";
  }
  return "";
}

export function getAvatarColors(avatarColor: AvatarColor): string {
  switch (avatarColor) {
    case "orange":
      return "text-orange-500 bg-orange-50";
    case "green":
      return "text-green-500 bg-green-50";
    case "neonblue":
      return "text-neonblue-500 bg-neonblue-50";
    case "primary":
      return "text-primary-500 bg-primary-50";
  }
  return "";
}
