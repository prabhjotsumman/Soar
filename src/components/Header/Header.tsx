import Logo from "../../assets/Logo.svg";
import { ICONS } from "../../assets/icons/icons";
import Icon from "../Icon/Icon";
import SearchBar from "../SearchBar/SearchBar";
import user6 from "../../assets/users/user6.png";

const Header = () => {
  return (
    <div>
      <div className=" flex w-full bg-white py-4 align-middle items-center">
        {/* LOGO */}
        <img
          src={Logo}
          alt="logo"
          className="hidden xs:block sm:block md:block xl:block pl-11 logo-bg pr-10"
        />

        <div className="flex justify-between w-full items-center">
          {/* Hamburger */}
          <div className="block sm:hidden md:hidden xs:hidden">
            <Icon icon={ICONS.HAM_BURGER} altName="hamburger" />
          </div>

          {/* Item Title */}
          <div className="pl-10 font-semibold text-xxl align-middle leading-8x">
            Overview
          </div>

          {/* Header Bar */}
          <div className="flex justify-between items-center xs:w-1/2 sm:w-1/2 md:w-1/2">
            <div className="flex justify-evenly items-center w-full">
              <div className="hidden xs:block sm:block md:block">
                <SearchBar />
              </div>
              <div className="hidden xs:block sm:block md:block">
                <Icon icon={ICONS.SETTINGS} altName="Settings" />
              </div>
              <div className="hidden xs:block sm:block md:block">
                <Icon icon={ICONS.NOTIFICATION} altName="Notification" />
              </div>
            </div>
            <div className="mr-4 p-1">
              <img src={user6} alt="user" className="rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="xs:hidden sm:hidden md:hidden lg:hidden text-center ">
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
