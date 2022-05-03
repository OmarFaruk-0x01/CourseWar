import { FC, useEffect, useState } from "react"
import breakpoints from "../../constants/breakpoints";
import useWindowSize from "../../hooks/useWindowSize";
import CheckBox from "../CheckBox";
import StatusView from "../StatusView";
import TextView from '../TextView/index';
import { TableRowProps } from "./index.interface";

const TableRow: FC<TableRowProps> = ({ rowContent }) => {
  const isHide = useWindowSize('tablet');


  return (
    <tr className="my-1 hover:bg-gray-50 odd:bg-primary-50 ">
      <td className="w-4 p-4 pr-0 hidden mobile:table-cell odd:text-red-100">
        <CheckBox />
      </td>

      <th
        scope="row"
        className="max-w-fit px-4 py-4 font-medium text-gray-900 hidden mobile:table-cell"
      >
        <TextView title={rowContent["Date Update"]} />
      </th>

      <th scope="row" className="px-4 py-4 font-medium text-gray-900 ">
        <TextView title={rowContent.Title} />
      </th>

      <td className="px-4 py-4 hidden laptop:table-cell ">
        <TextView title={rowContent.Details} />
      </td>

      <td className="px-4 py-4  mobile:table-cell">
        <StatusView state={rowContent.Status} showText={isHide} />
      </td>

      <td className="px-4 py-4 text-right tablet:text-center tablet:table-cell">
        <TextView title={rowContent.Quantity} />
      </td>

      <td className="px-4 py-4 hidden tablet:table-cell text-center">
        <TextView title={rowContent["Unit Price"]} />
      </td>
      <td className="px-4 py-4 text-right tablet:table-cell">
        <TextView title={rowContent.Amount} />
      </td>
    </tr>
  );
};

export default TableRow;