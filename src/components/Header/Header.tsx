import Logo from "../../assets/Logo.svg";
import { ICONS } from "../../assets/icons/icons";
import Icon from "../Icon/Icon";
import SearchBar from "../SearchBar/SearchBar";
import user6 from "../../assets/users/user6.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [profilePic, setProfilePic] = useState(user6);
  const [rotate, setRotate] = useState(false);
  const [storedData] = useState(localStorage.getItem("profileData"));

  // use the image from the localstorage
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

  // Update when new profile picture is updated
  useEffect(() => {
    const handleStorage = () => {
      const storedData = localStorage.getItem("profileData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        Object.keys(parsedData).forEach((key) => {
          if (key === "profilePic") {
            setProfilePic(parsedData[key]);
          }
        });
      }
    };

    window.addEventListener("storage", () => handleStorage());
    return () => window.removeEventListener("storage", () => handleStorage());
  }, []);

  const handleHamburgerMenu = () => {
    window.dispatchEvent(new Event("HamburgerMenuClicked"));
    setRotate(!rotate);
  };

  return (
    <div>
      <div className="flex w-full bg-white py-4 align-middle items-center">
        <div className="flex justify-between w-full items-center">
          {/* Hamburger */}
          <div
            className={`block lg:hidden xl:hidden ml-2 ${rotate ? "rotate-90" : ""}`}
            onClick={handleHamburgerMenu}
          >
            <Icon icon={ICONS.HAM_BURGER} altName="hamburger" />
          </div>

          {/* LOGO */}
          <img
            src={Logo}
            alt="logo"
            className="hidden xs:hidden sm:hidden md:hidden xl:block pl-11 logo-bg pr-10"
          />

          {/* Item Title */}
          <div className="pl-10 font-semibold text-xxl align-middle leading-8x">
            Overview
          </div>

          {/* Header Bar */}
          <div className="flex justify-between items-center">
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
            <div className=" p-1 items-center w-28">
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
