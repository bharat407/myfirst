import React, { useState } from "react";

const Dropdown = ({ items }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="relative self-stretch flex items-center">
      <button
        type="button"
        className="inline-flex items-center px-3 py-2.5 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-0 transition"
        onClick={handleDropdownToggle}
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
      >
        <span className="font-Nunito focus-within:rounded-md focus:outline-none focus:ring-[1px] focus:ring-[#2051BB] inline-flex items-center px-2 py-[10px]  text-sm font-medium leading-5   focus:border-blue-700 transition xl:flex">
          <img
            className="h-8 w-8 rounded-full object-cover mr-2"
            src="https://ui-avatars.com/api/?name=Admin+User&amp;color=E5E7EB&amp;background=1F2937"
            alt="Admin User"
          />
          Admin User
          <svg
            className="ml-2 -mr-0.5 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="absolute z-50 top-full mt-2 rounded-md shadow-lg dark:border dark:border-gray-700 w-48 origin-top-right right-0">
          <div className="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white dark:bg-gray-900">
            <div className="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">
              Manage Account
            </div>
            {items.map((item) => (
              <div key={item.title}>
                <div className="border-t border-gray-100 dark:border-gray-700"></div>
                <a
                  className="block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition"
                  href={item.url}
                  role="menuitem"
                >
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
