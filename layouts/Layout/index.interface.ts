import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface LayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  title?: string;
  withHeader?: boolean;
  withSidebar?: boolean;
  renderLeftSideBar?: (props: any) => JSX.Element
}
