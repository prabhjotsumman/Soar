import Logo from "../../assets/Logo.svg";
import { ICONS } from "../../assets/icons/icons";
import Icon from "../Icon/Icon";
import SearchBar from "../SearchBar/SearchBar";
import user6 from "../../assets/users/user6.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [profilePic, setProfilePic] = useState(user6);
  const [storedData] = useState(localStorage.getItem("profileData"));

  useEffect(() => {
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      Object.keys(parsedData).forEach((key) => {
        if (key === "profilePic") {
          setProfilePic(parsedData[key]);
        }
      });
    }
  }, [storedData]);

  return (
    <div>
      <div className="flex w-full bg-white py-4 align-middle items-center">
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
          <div className="flex justify-between items-center ">
            <div className="flex justify-evenly items-center w-full">
              <div className="hidden xs:hidden sm:hidden md:block">
                <SearchBar />
              </div>
              <div className="hidden xs:block sm:block md:block">
                <Icon icon={ICONS.SETTINGS} altName="Settings" />
              </div>
              <div className="hidden xs:block sm:block md:block">
                <Icon icon={ICONS.NOTIFICATION} altName="Notification" />
              </div>
            </div>
            {/* Profile Picture */}
            <div className="mr-4 p-1 items-center">
              <img
                src={profilePic}
                alt="user"
                className="rounded-full w-14 h-12 object-cover "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="xs:hidden sm:block md:hidden lg:hidden text-center ">
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
