import Logo from "../../assets/Logo.svg";
// import Icon from "../Icon/Icon";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <div className=" flex w-full bg-white border-black border-4 my-4 align-middle items-center">
      <img src={Logo} alt="logo" className=" pl-11 logo-bg pr-10" />

      <div className="pl-10 font-semibold text-xxl align-middle leading-8x">
        Overview
      </div>
      <div className="flex">
        <SearchBar/>

      </div>
    </div>
  );
};

export default Header;
