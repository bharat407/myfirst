import React from "react";
// import { toast } from "react-hot-toast";
import DropdownMenu from "./dropDown";

import Dropdown from "./Admin";

const Navbar = () => {
  const items = [
    {
      id: "profile",
      title: "Profile",
      url: "/",
    },

    {
      id: "logOut",
      title: "Log Out",
      url: "/",
    },
  ];
  return (
    // <div className="page min-h-screen font-Nunito bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">

    <nav className="header bg-white dark:bg-gray-900 border-b dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          <div className="flex">
            <div className="shirnk-0 flex items-center mr-4">
              <a href="/">
                <h2 className="font-extrabold text-2xl font-Nunito">SIM</h2>
              </a>
            </div>
            <div className="hidden space-x-2 lg:my-px sm:ml-px lg:ml-4 lg:flex">
              <a
                className="font-Nunito focus-within:rounded-md focus:outline-none focus:ring-[2px] focus:ring-[#183A97] inline-flex items-center px-1 py-[27.7px] border-b-[1px] border-blue-400 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100  focus:border-blue-700 transition xl:flex"
                href="/dashboard"
              >
                Dashboard
              </a>
            </div>
            <DropdownMenu />
            <div class="self-stretch flex items-stretch">
              <span class="inline-flex rounded-md">
                <button
                  type="button"
                  id="orders-menu"
                  class=" font-Nunito ml-3 inline-flex py-[28.2px]  items-center px-3  border-b text-sm leading-4 font-medium text-gray-600 hover:text-gray-800 focus:outline-none transition focus:ring-0 focus:rounded-none focus:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 dark:focus:text-gray-100 border-gray-300 hover:border-gray-400 focus:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 dark:focus:border-gray-500"
                >
                  Data
                  <svg
                    class="h-4 w-4 ml-2 -mr-0.5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </span>
            </div>

            <div class="self-stretch flex items-stretch">
              <span class="inline-flex rounded-md">
                <button
                  type="button"
                  id="orders-menu"
                  class=" font-Nunito ml-3 inline-flex py-[28.2px] items-center px-2  border-b text-sm leading-4 font-medium text-gray-600 hover:text-gray-800 focus:outline-none transition focus:ring-0 focus:rounded-none focus:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 dark:focus:text-gray-100 border-gray-300 hover:border-gray-400 focus:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 dark:focus:border-gray-500"
                >
                  Settings
                  <svg
                    class="h-4 w-4 ml-2 -mr-0.5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </span>
            </div>

            <div class="self-stretch flex items-stretch">
              <span class="inline-flex rounded-md">
                <button
                  type="button"
                  id="orders-menu"
                  class=" font-Nunito ml-3 inline-flex py-[28.2px] items-center px-3  border-b text-sm leading-4 font-medium text-gray-600 hover:text-gray-800 focus:outline-none transition focus:ring-0 focus:rounded-none focus:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 dark:focus:text-gray-100 border-gray-300 hover:border-gray-400 focus:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 dark:focus:border-gray-500"
                >
                  Reports
                  <svg
                    class="h-4 w-4 ml-2 -mr-0.5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </span>
            </div>
          </div>

          <Dropdown items={items} />
        </div>
      </div>
    </nav>
    // </div>
  );
};

export default Navbar;
