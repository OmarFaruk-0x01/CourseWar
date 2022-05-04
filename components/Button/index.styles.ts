import { ButtonContent, ButtonSizes, ButtonType } from "./index.interface";

export function getButtonSizes(buttonSizes: ButtonSizes): string {
  switch (buttonSizes) {
    case "regular":
      return "p-3 gap-0";
    case "regular-v2":
      return "py-4 px-5 text-md gap-3";
    case "small":
      return "py-[7px] px-3 text-sm gap-2 ";
    case "medium":
      return "py-3 px-2 text-md gap-2";
    case "large":
      return "p-4 gap-3";
  }
  return "";
}

export function getButtonContent(buttonContent: ButtonContent): string {
  switch (buttonContent) {
    case "icon":
      return "";
    case "icon-text":
      return "flex-row-reverse";
    case "text-icon":
      return "";
    case "text":
      return "";
  }

  return "";
}

export function getButtonType(buttonType: ButtonType): string {
  switch (buttonType) {
    case "primary":
      return "bg-primary-500 text-white hover:bg-primary-600";
    case "secondary":
      return "bg-gray-400 text-[white] hover:bg-gray-500 active:bg-gray-600";
    case "tertiary":
      return "bg-white outline outline-1 active:outline-2 outline-gray-300 text-gray-500";
    case "critical":
      return "bg-red-500 text-[#fff] hover:bg-red-600 active:bg-red-700";
    case "link":
      return "bg-transparent outline outline-1 active:text-primary-600 outline-gray-700 outline-offset-1 text-primary-400 hover:text-primary-500";
    case "drop_text":
      return "text-black ";
  }

  return "";
}
