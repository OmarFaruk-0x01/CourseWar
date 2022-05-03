import { FC } from "react";
import { AiOutlineDown, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Button from "../Button";
import { TableViewProps } from "./index.interface";

const TableView: FC<TableViewProps> = ({ data, renderHeader, renderRow }) => {
  function renderTableRow() {
    return data.map(renderRow);
  }
  return (
    <div>
      <table className=" w-full text-sm text-left table-auto">
        {renderHeader()}
        <tbody className="">{renderTableRow()}</tbody>
      </table>

      <div className=" px-2 py-5 flex items-center justify-between">
        <div className="hidden tablet:flex">
          <Button
            extentClassName="shadow-md"
            buttonType="tertiary"
            buttonContent="text-icon"
            buttonSizes="small"
            buttonIcon={AiOutlineDown}
            title="10 items per page"
          />
        </div>
        <div className="flex items-center justify-start">
          <Button
            extentClassName="shadow-md"
            buttonType="tertiary"
            buttonContent="text-icon"
            buttonSizes="small"
            buttonIcon={AiOutlineDown}
            title="page 1 of 5"
          />
          <div className=" px-2 flex items-center justify-start">
            <Button
              extentClassName="shadow-md"
              buttonType="tertiary"
              buttonContent="icon"
              buttonSizes="small"
              buttonIcon={AiOutlineLeft}
              title="left"
            />
            <Button
              extentClassName="shadow-md"
              buttonType="tertiary"
              buttonContent="icon"
              buttonSizes="small"
              buttonIcon={AiOutlineRight}
              title="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableView;
