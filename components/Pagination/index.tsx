import Link from "next/link";
import { FC } from "react";
import { AiOutlineDown, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { usePagination } from "../../hooks/usePagination";
import Button from "../Button";
import DropDownMenu from "../DropDownMenu";
import DropDownMenuItem from "../DropDownMenuItem";

interface PaginationProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  totalPageCount: number;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  onPageChange,
  totalPageCount,
  siblingCount = 1,
  totalCount,
}) => {
  const paginationRange = usePagination({
    currentPage,
    siblingCount,
    totalCount,
    totalPageCount,
  }) as number[];

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <div className="px-2 py-5 flex tablet:flex-row-reverse items-center justify-center tablet:justify-between">
      
      <div className="flex items-center justify-center">
        <div className=" px-2 flex items-center justify-center">
          <Button
            onClick={onPrevious}
            extentClassName="shadow-md"
            buttonType="tertiary"
            buttonContent="icon"
            buttonSizes="small"
            buttonIcon={AiOutlineLeft}
            title=""
          />
          <div className="grid grid-cols-4 tablet:flex flex-wrap item-center justify-items-center">
            {paginationRange?.map((i) => (
              <Button
                onClick={() =>
                  isNaN(i) ? onPageChange(currentPage + 1) : onPageChange(i)
                }
                extentClassName="w-10 shadow-md "
                buttonType={i === currentPage ? "primary" : "tertiary"}
                buttonContent="text"
                buttonSizes="large"
                buttonIcon={AiOutlineRight}
                title={isNaN(i) ? "..." : i.toString()}
              />
            ))}
          </div>
          <Button
            onClick={onNext}
            extentClassName="shadow-md"
            buttonType="tertiary"
            buttonContent="icon"
            buttonSizes="small"
            buttonIcon={AiOutlineRight}
            title=""
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
