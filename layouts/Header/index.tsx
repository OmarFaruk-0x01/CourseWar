import { FC } from "react";
import { BiChevronDown, BiNotification } from "react-icons/bi";
import Button from "../../components/Button";
import Search from "../../components/Search";
import DashIcon from "../../components/DashIcon";
import Avatar from "../../components/Avatar";
const Header: FC<{}> = () => {
  return (
    <header className="tablet:fixed tablet:top-0 w-full flex items-center justify-between bg-white shadow-sm z-20">
      <div className="flex items-center justify-between w-[20%] laptop:w-[200px]">
        <Button
          buttonContent="text-icon"
          buttonIcon={BiChevronDown}
          title={"Starbucks"}
          buttonType={"drop_text"}
          buttonSizes="regular-v2"
          extentClassName="mr-5"
        />
      </div>
      <div className="hidden tablet:flex flex-1 items-center justify-start">
        <Search extentClassName="tablet:w-[76%] laptop:!w-[350px]" />
      </div>

      <div className="flex items-center justify-center">
        <DashIcon _Icon={BiNotification} />
        <Avatar title="Omar" avatarSizes="medium" avatarColor="primary" />
        <Button
          buttonContent="text-icon"
          buttonIcon={BiChevronDown}
          title={"Omar Faruk"}
          buttonType={"drop_text"}
          buttonSizes="small"
        />
      </div>
    </header>
  );
};

export default Header;
