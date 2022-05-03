import React, { TableHTMLAttributes } from "react";
import customData from "../../constants/customData";
import { TableHeaderProps } from "../TableHeader/index.interface";

export interface TableViewProps extends TableHTMLAttributes<HTMLTableElement> {
  data: typeof customData[0][];
  renderHeader: () => JSX.Element;
  renderRow: (
    item: typeof customData[0],
    index: number,
  ) => JSX.Element;
}
