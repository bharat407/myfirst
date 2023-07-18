import React from "react";

const Navbar = () => {
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
                className="font-Nunito inline-flex items-center px-1 py-[27.7px] border-b border-blue-400 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-700 transition xl:flex"
                href="/"
              >
                Dashboard
              </a>
            </div>
            <div class="self-stretch flex items-stretch">
              <span class="inline-flex rounded-md">
                <button
                  type="button"
                  id="orders-menu"
                  class=" font-Nunito ml-3 inline-flex py-[28.2px] items-center px-2 border-b text-sm leading-4 font-medium text-gray-600 hover:text-gray-800 focus:outline-none transition focus:ring-0 focus:rounded-none focus:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 dark:focus:text-gray-100 border-gray-300 hover:border-gray-400 focus:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 dark:focus:border-gray-500"
                >
                  Orders
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
          <div className="flex items-cente ">
            {/* <div className="flex items-center  gap-2 ">
              <span class="mt-0.5 w-6 h-6">🇺🇸</span>
              <button
                type="button"
                className="bg-gray-200 dark:bg-gray-700 relative inline-flex h-6 w-11 mr-3 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:border-transparent focus:rounded-full focus:ring-0"
              ></button>
              <span class="sr-only">Theme toggle</span>
            </div> */}
            <button
              type="button"
              class="inline-flex items-center px-3 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-0 transition"
            >
              <img
                class="h-8 w-8 rounded-full object-cover mr-2"
                src="https://ui-avatars.com/api/?name=Admin+User&amp;color=E5E7EB&amp;background=1F2937"
                alt="Admin User"
              />
              <a href="/" className="font-Nunito">
                Admin User
              </a>
              <svg
                class="ml-2 -mr-0.5 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
    // </div>
  );
};

export default Navbar;
