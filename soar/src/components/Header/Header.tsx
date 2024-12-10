import Logo from "../../assets/Logo.svg";
import { ICONS } from "../../assets/icons/icons";
import Icon from "../Icon/Icon";
import SearchBar from "../SearchBar/SearchBar";
import user6 from "../../assets/users/user6.png";

const Header = () => {
  return (
    <div className=" flex w-full bg-white border-black border-4 my-4 align-middle items-center">
      <img src={Logo} alt="logo" className=" pl-11 logo-bg pr-10" />

      <div className="border-2 border-red-600 flex justify-between w-full">
        <div className="pl-10 font-semibold text-xxl align-middle leading-8x ">
          Overview
        </div>
        <div className="flex justify-evenly border-2 border-violet-600 items-center w-1/2">
          <SearchBar />
          <Icon icon={ICONS.SETTINGS} altName="Settings" />
          <Icon icon={ICONS.NOTIFICATION} altName="Notification" />
          <img src={user6} alt="user" className="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;
