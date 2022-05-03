import { FC } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import Button from "../Button";
import CheckBox from "../CheckBox";
import { TableHeaderProps } from "./index.interface";

const TableHeader: FC<TableHeaderProps> = () => {
  return (
    <thead className="text-xs bg-red-50 w-full ">
      <tr className="">
        <th scope="col" className="p-4 pr-0 hidden mobile:table-cell">
          <CheckBox />
        </th>

        <th scope="col" className="hidden mobile:table-cell">
          <Button
            buttonContent="text-icon"
            buttonSizes="small"
            buttonIcon={AiOutlineArrowDown}
            title={"Date Updated"}
            buttonType="drop_text"
            extentClassName="text-md "
          />
        </th>

        <th scope="col" className="">
          <Button
            buttonContent="text-icon"
            buttonSizes="small"
            buttonIcon={AiOutlineArrowDown}
            title={"Title"}
            buttonType="drop_text"
            extentClassName="text-md"
          />
        </th>

        <th scope="col" className="hidden laptop:table-cell">
          <Button
            buttonContent="text"
            buttonSizes="small"
            buttonIcon={AiOutlineArrowDown}
            title={"Details"}
            buttonType="drop_text"
            extentClassName="text-md cursor-default text-gray-500"
          />
        </th>

        <th scope="col" className=" mobile:table-cell">
          <Button
            buttonContent="text"
            buttonSizes="small"
            buttonIcon={AiOutlineArrowDown}
            title={"Status"}
            buttonType="drop_text"
            extentClassName="text-md cursor-default hidden mobile:flex text-gray-500"
          />
        </th>

        <th scope="col" className=" tablet:table-cell">
          <Button
            buttonContent="text"
            buttonSizes="small"
            buttonIcon={AiOutlineArrowDown}
            title={"Quantity"}
            buttonType="drop_text"
            extentClassName="text-md cursor-default hidden mobile:flex text-gray-500"
          />
        </th>

        <th scope="col" className="hidden tablet:table-cell">
          <Button
            buttonContent="text"
            buttonSizes="small"
            buttonIcon={AiOutlineArrowDown}
            title={"Unit Price"}
            buttonType="drop_text"
            extentClassName="text-md cursor-default"
          />
        </th>

        <th scope="col" className="block">
          <Button
            buttonContent="icon-text"
            buttonSizes="small"
            buttonIcon={AiOutlineArrowDown}
            title={"Amount"}
            buttonType="drop_text"
            extentClassName="text-md ml-auto"
          />
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
