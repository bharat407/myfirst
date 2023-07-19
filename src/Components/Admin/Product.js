import Navbar from "../Navbar";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Button from "../Button";
import CustomCheckbox from "../CustomCheckbox";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  const handleAdd = () => {
    toast.error("Developing");
  };

  const navigate = useNavigate();
  function submitHandler(e) {
    e.preventDefault();
    navigate("/addproduct");
    toast.success("Please Add Products");
  }

  return (
    <div className="page min-h-screen font-Nunito bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
      <Navbar />
      <div className="py-8">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 shadow sm:rounded-lg">
            <div>
              <div className="p-6 sm:rounded-t-lg border-b border-gray-200 dark:border-gray-700 block md:flex md:items-center md:justify-between">
                <div>
                  <div className="text-2xl">
                    Products <span className="text-base"></span>
                  </div>
                  <div className="mt-1 text-gray-500 dark:text-gray-400">
                    Please review the result below
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 block sm:flex sm:items-center sm:gap-4">
                  <Button name=" Add New Products" onClick={submitHandler} />
                  <form>
                    <div className="mt-4 sm:mt-0 w-full flex items-stretch group bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-md focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-200 dark:focus-within:ring-opacity-50">
                      <div className="relative w-full flex items-stretch">
                        <div className="flex items-center w-full rounded-md">
                          <input
                            type="text"
                            name="search"
                            autocomplete="off"
                            placeholder="Search"
                            class="flex-1 text-sm z-0 w-full pl-3 pr-2 py-2.5 rounded-l-md focus:outline-none focus:ring-0 border-0 dark:bg-gray-800 focus:rounded-r-none"
                          />
                        </div>
                        <button
                          type="button"
                          className="hidden group-hover:block absolute top-0.5 my-1 right-2 px-2 py-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:text-blue-500 rounded-md focus:outline-none focus:rounded-none dark:focus:rounded"
                        >
                          Reset
                        </button>
                      </div>
                      <div className="flex items-stretch">
                        <div className="relative flex items-stretch">
                          <div className="self-stretch flex items-stretch">
                            <button
                              type="button"
                              className="flex py-1 px-1 md:pl-2 md:pr-0 items-center justify-center rounded-r-md focus:outline-none relative transition duration-150 ease-in-out bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700 border-0 border-l border-gray-200 dark:border-gray-700"
                            >
                              <span className="hidden md:inline">Filter</span>
                              <svg
                                className="h-4 w-4 text-gray-400 md:mx-1"
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 font-Nunito dark:bg-black/50 border-b dark:border-gray-700 sm:rounded-b-lg">
                  <div>
                    <div className="flex flex-col">
                      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                          <div className="relative overflow-hidden ring-1 ring-black ring-opacity-5">
                            <table className="min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-700">
                              <thead className="bg-gray-50 dark:bg-black/50">
                                <tr>
                                  <th
                                    scope="col"
                                    className="relative w-12 sm:w-16 sm:px-8"
                                  >
                                    <div className="bg-gray-50 dark:bg-black/50">
                                      <label className="inline-flex items-center">
                                        <input
                                          type="checkbox"
                                          id="checkbox"
                                          checked={isChecked}
                                          onChange={handleCheckboxChange}
                                          className=" appearance-none w-4 h-4 border border-gray-300 rounded checked:bg-blue-600 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                          name="checkbox"
                                        />
                                      </label>
                                    </div>
                                  </th>
                                  {isChecked ? (
                                    <div class="absolute top-0 left-12 flex h-12 items-center space-x-3 sm:left-16">
                                      <th
                                        scope="col"
                                        className=" appearance-none px-3 hidden font-Nunito py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                                      >
                                        Name
                                      </th>
                                      <button
                                        type="button"
                                        onClick={handleAdd}
                                        class="inline-flex items-center rounded border mt-4 text-white border-red-500 bg-red-500 px-2.5 py-2.5 text-xs font-medium shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                      >
                                        Move to Trash
                                      </button>

                                      <button
                                        type="button"
                                        onClick={handleAdd}
                                        class="inline-flex items-center py-2.5 mt-4 rounded border text-white border-red-500 bg-red-500 px-2.5 text-xs font-medium shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                      >
                                        Delete Permanently
                                      </button>
                                      <th
                                        scope="col"
                                        className=" appearance-none py-3.5 hidden px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                                      >
                                        Price
                                      </th>
                                    </div>
                                  ) : null}

                                  {!isChecked && (
                                    <div className="bg-gray-50 dark:bg-black/50">
                                      <th
                                        scope="col"
                                        className="py-7 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                                      >
                                        Name
                                      </th>
                                      <th
                                        scope="col"
                                        className=" appearance-none py-3.5 hidden px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                                      >
                                        Price
                                      </th>
                                    </div>
                                  )}
                                  <th
                                    scope="col"
                                    className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                                  >
                                    Price
                                  </th>
                                  <th
                                    scope="col"
                                    className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                                  >
                                    Tax Rates
                                  </th>
                                  <th
                                    scope="col"
                                    className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                                  >
                                    Tax Methods
                                  </th>
                                  <th
                                    scope="col"
                                    className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                                  >
                                    Custom Fields
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
                                <tr className="bg-gray-50 dark:bg-gray-800/50">
                                  <td className="relative w-12 sm:w-16 sm:px-8">
                                    <div className="absolute inset-y-0 left-0 w-0.5 bg-blue-600"></div>
                                    <CustomCheckbox
                                      onChange={handleCheckboxChange}
                                    />
                                  </td>

                                  <td className="whitespace-nowrap py-4 text-sm font-medium">
                                    <div>Product 33</div>
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm font-medium">
                                    <div>$43.00 </div>
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm font-bold">
                                    <a className="balance-0" href="/">
                                      Tax Rate 1, Tax Rate 2
                                    </a>
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm font-medium">
                                    <a className="balance-0" href="/">
                                      Inclusive
                                    </a>
                                  </td>

                                  <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 w-20">
                                    <div className="flex flex-col items-center justify-end gap-3">
                                      <div className="flex items-center justify-end gap-3">
                                        <button
                                          type="button"
                                          className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-6 h-6"
                                          >
                                            <path
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                                            ></path>
                                          </svg>
                                        </button>
                                        <button
                                          type="button"
                                          className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-6 h-6"
                                          >
                                            <path
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                            ></path>
                                          </svg>
                                        </button>
                                      </div>
                                      <div className="flex items-center justify-end gap-3">
                                        <button
                                          class="text-blue-600 hover:text-blue-900 dark:hover:text-blue-300"
                                          onClick={handleAdd}
                                          type="button"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-6 h-6"
                                          >
                                            <path
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                            ></path>
                                          </svg>
                                        </button>
                                        <button
                                          className="text-red-600 hover:text-red-900 dark:hover:text-red-300"
                                          onClick={handleAdd}
                                          type="button"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-6 h-6"
                                          >
                                            <path
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                            ></path>
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                              <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
                                <tr className="bg-gray-50 dark:bg-gray-800/50">
                                  <td className="relative w-12 sm:w-16 sm:px-8">
                                    <div className="absolute inset-y-0 left-0 w-0.5 bg-blue-600"></div>
                                    <CustomCheckbox
                                      onChange={handleCheckboxChange}
                                    />
                                  </td>

                                  <td className="whitespace-nowrap py-4 text-sm font-medium">
                                    <div>Product 35</div>
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm font-medium">
                                    <div>$403.00 </div>
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm font-bold">
                                    <a className="balance-0" href="/">
                                      Tax Rate 3, Tax Rate 4
                                    </a>
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm font-medium">
                                    <a className="balance-0" href="/">
                                      Exclusive
                                    </a>
                                  </td>

                                  <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 w-20">
                                    <div className="flex flex-col items-center justify-end gap-3">
                                      <div className="flex items-center justify-end gap-3">
                                        <button
                                          type="button"
                                          className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-6 h-6"
                                          >
                                            <path
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                                            ></path>
                                          </svg>
                                        </button>
                                        <button
                                          type="button"
                                          className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-6 h-6"
                                          >
                                            <path
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                            ></path>
                                          </svg>
                                        </button>
                                      </div>
                                      <div className="flex items-center justify-end gap-3">
                                        <button
                                          class="text-blue-600 hover:text-blue-900 dark:hover:text-blue-300"
                                          onClick={handleAdd}
                                          type="button"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-6 h-6"
                                          >
                                            <path
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                            ></path>
                                          </svg>
                                        </button>
                                        <button
                                          className="text-red-600 hover:text-red-900 dark:hover:text-red-300"
                                          onClick={handleAdd}
                                          type="button"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-6 h-6"
                                          >
                                            <path
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                            ></path>
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
