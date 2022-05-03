import { DetailedHTMLProps, HTMLAttributes, ClassType, ComponentClass, ClassAttributes } from "react";

export interface SearchProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  extentClassName?: string;
}
