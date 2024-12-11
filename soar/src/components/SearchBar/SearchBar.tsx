import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div>
      <div className="relative ">
        <div className="absolute inset-y-0 start-16 xs:start-8 sm:start-8 md:start-8 lg:start-8 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          className="search-bar h-12 pl-16 ml-4 px-10 rounded-3xl bg-screen-gray"
          placeholder="Search for something"
          prefix="$"
        />
      </div>
    </div>
  );
};

export default SearchBar;
