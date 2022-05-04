import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SearchProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  extentClassName?: string;
}
