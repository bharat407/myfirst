import React from "react";

const DropdownData = ({ items, isDropdownOpen, toggleDropdown }) => {
  return (
    <div className="relative self-stretch flex items-stretch">
      <span className="inline-flex rounded-md">
        <button
          type="button"
          onClick={toggleDropdown}
          className="font-Nunito ml-3 inline-flex py-[28.3px] items-center px-2 border-b text-sm leading-4 font-medium text-gray-600 hover:text-gray-800 focus:outline-none transition focus:ring-0 focus:rounded-none focus:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 dark:focus:text-gray-100 border-gray-300 hover:border-gray-400 focus:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 dark:focus:border-gray-500"
          id="orders-menu"
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          Data
          <svg
            className={`h-4 w-4 ml-2 -mr-0.5 text-gray-500 ${
              isDropdownOpen ? "transform rotate-0" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </span>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="absolute mt-[11vh] right-[-68px] w-48 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="orders-menu"
          >
            <div className="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">
              Manage Customers
            </div>
            <div id="list-invoices">
              <a
                className="font-Nunito focus-within:bg-gray-800 focus-within:rounded-md focus:outline-none focus:ring-[2px] focus:ring-[#1E40AF] block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800  transition"
                href="/list"
                role="menuitem"
              >
                List Customers
              </a>
            </div>
            <div id="add-invoice">
              <a
                // className="font-Nunito focus-within:bg-gray-800 focus-within:rounded-md focus:outline-none focus:ring-[2px] focus:ring-[#1E40AF] block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800  transition"
                className="font-Nunito focus-within:bg-gray-800 focus-within:rounded-md focus:outline-none focus:ring-[2px] focus:ring-[#1E40AF] block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800  transition"
                href="/createCustomer"
                role="menuitem"
              >
                Add New Customer
              </a>
            </div>
            <div id="list-payments">
              <a
                className="font-Nunito focus-within:bg-gray-800 focus-within:rounded-md focus:outline-none focus:ring-[2px] focus:ring-[#1E40AF] block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800  transition"
                href="/importcustomerfile"
                role="menuitem"
              >
                Import Customers
              </a>
            </div>
            <div className="border-t border-gray-100 dark:border-gray-700"></div>
            <div className="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">
              Manage Products
            </div>
            <div>
              <a
                className="font-Nunito focus-within:bg-gray-800 focus-within:rounded-md focus:outline-none focus:ring-[2px] focus:ring-[#1E40AF] block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800  transition"
                href="/product"
                role="menuitem"
              >
                List Products
              </a>
            </div>

            <div>
              <a
                className="font-Nunito focus-within:bg-gray-800 focus-within:rounded-md focus:outline-none focus:ring-[2px] focus:ring-[#1E40AF] block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800  transition"
                href="/createProduct"
                role="menuitem"
              >
                Add New Product
              </a>
            </div>

            <div>
              <a
                className="font-Nunito focus-within:bg-gray-800 focus-within:rounded-md focus:outline-none focus:ring-[2px] focus:ring-[#1E40AF] block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800  transition"
                href="/importfile"
                role="menuitem"
              >
                Import Products
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownData;
