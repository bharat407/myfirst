import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <div className="page min-h-screen font-Nunito bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
      {/* NavBAr  */}
      {/* NavBAr  */}
      <Navbar />
      {/* Body BoX */}

      <div className="py-8">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 overflow-hidden shadow sm:rounded-lg">
            <div>
              <div className="p-6">
                <div className="text-2xl">
                  Welcome to SIM management portal.
                </div>
                <div className="mt-2 text-gray-500 dark:text-gray-400">
                  Last 30 days invoices and quotations with total products &amp;
                  customers followed by invoice statistics and quick links.
                </div>
              </div>
              <div className="p-6 bg-blue-50 dark:bg-blue-900/10 border-b border-t border-blue-100 dark:border-gray-700">
                <div className="mb-6">
                  <h3 className="text-lg leading-6 font-semibold">
                    Last 30 days
                  </h3>
                  <dl className="mt-2 grid grid-cols-1 rounded-lg bg-white dark:bg-gray-900 overflow-hidden border dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700 md:grid-cols-2 lg:grid-cols-4 md:divide-x lg:divide-y-0 lg:divide-x">
                    <div className="px-4 py-5 sm:p-6">
                      <dt className="text-base font-normal">Invoices Amount</dt>
                      <dd className="mt-1 flex justify-between items-end">
                        <div className="flex items-baseline text-2xl font-semibold text-blue-600 dark:text-blue-400">
                          $19,771.00
                        </div>
                        <span className="flex items-center space-x-1 text-sm font-medium leading-none text-red-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
                            ></path>
                          </svg>
                          <span>-40% </span>
                        </span>
                      </dd>
                    </div>
                    <div className="px-4 py-5 sm:p-6">
                      <dt className="text-base font-normal">Payments Amount</dt>
                      <dd className="mt-1 flex justify-between items-center">
                        <div className="flex items-baseline text-2xl font-semibold text-blue-600 dark:text-blue-400">
                          $2,265.00
                        </div>
                        <span className="flex items-center space-x-1 text-sm font-medium leading-none text-red-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
                            ></path>
                          </svg>
                          <span>-64% </span>
                        </span>
                      </dd>
                    </div>
                    <div className="px-4 py-5 sm:p-6">
                      <dt className="text-base font-normal">Quotations</dt>
                      <dd className="mt-1 flex justify-between items-center">
                        <div className="flex items-baseline text-2xl font-semibold text-blue-600 dark:text-blue-400">
                          1
                        </div>
                      </dd>
                    </div>
                    <div className="px-4 py-5 sm:p-6">
                      <dt className="text-base font-normal">Total Customers</dt>
                      <dd className="mt-1 text-2xl font-semibold text-blue-600 dark:text-blue-400">
                        50
                      </dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
                    Invoice Statistics
                  </h3>
                  <dl className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="overflow-hidden rounded-lg bg-green-100 dark:bg-green-700 border border-green-200 dark:border-green-800 px-4 py-5 sm:p-6">
                      <dt className="truncate text-sm font-medium text-green-700 dark:text-green-200">
                        Total Paid Invoices
                      </dt>
                      <dd className="flex items-baseline justify-between mt-1 text-2xl font-semibold tracking-tight text-green-900 dark:text-green-100">
                        19
                        <p className="ml-2 flex items-baseline text-sm text-green-700 dark:text-green-200">
                          <span className="sr-only">Percentage</span> 25.33%
                        </p>
                      </dd>
                    </div>
                    <div className="overflow-hidden rounded-lg bg-blue-100 dark:bg-blue-700 border border-blue-200 dark:border-blue-800 px-4 py-5 sm:p-6">
                      <dt className="truncate text-sm font-medium text-blue-700 dark:text-blue-200">
                        Total Pending Invoices
                      </dt>
                      <dd className="flex items-baseline justify-between mt-1 text-2xl font-semibold tracking-tight text-blue-900 dark:text-blue-100">
                        15
                        <p className="ml-2 flex items-baseline text-sm text-blue-700 dark:text-blue-200">
                          <span className="sr-only">Percentage</span> 20.00%
                        </p>
                      </dd>
                    </div>
                    <div className="overflow-hidden rounded-lg bg-yellow-100 dark:bg-yellow-700 border border-yellow-200 dark:border-yellow-800 px-4 py-5 sm:p-6">
                      <dt className="truncate text-sm font-medium text-yellow-700 dark:text-yellow-200">
                        Total Overdue Invoices
                      </dt>
                      <dd className="flex items-baseline justify-between mt-1 text-2xl font-semibold tracking-tight text-yellow-900 dark:text-yellow-100">
                        24
                        <p className="ml-2 flex items-baseline text-sm text-yellow-700 dark:text-yellow-200">
                          <span className="sr-only">Percentage</span> 32.00%
                        </p>
                      </dd>
                    </div>
                    <div className="overflow-hidden rounded-lg bg-red-100 dark:bg-red-700 border border-red-200 dark:border-red-800 px-4 py-5 sm:p-6">
                      <dt className="truncate text-sm font-medium text-red-700 dark:text-red-200">
                        Total Canceled Invoices
                      </dt>
                      <dd className="flex items-baseline justify-between mt-1 text-2xl font-semibold tracking-tight text-red-900 dark:text-red-100">
                        17
                        <p className="ml-2 flex items-baseline text-sm text-red-700 dark:text-red-200">
                          <span className="sr-only">Percentage</span> 22.67%
                        </p>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                      ></path>
                    </svg>
                    <div className="ml-4 text-lg leading-7 font-semibold">
                      <a href="/">Products</a>
                    </div>
                  </div>
                  <div className="ml-12 flex flex-wrap gap-y-4 gap-x-6">
                    <div className="w-full mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Manage products for invoicing
                    </div>
                    <a
                      className="inline-flex items-center  rounded-md text-sm font-semibold text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 focus:outline-none  font-Nunito focus:ring-[2px] focus:ring-[#2563eb]"
                      href="/product"
                    >
                      List
                    </a>
                    <a
                      className="inline-flex items-center rounded-md text-sm font-semibold text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 focus:outline-none  font-Nunito focus:ring-[2px] focus:ring-[#2563eb]"
                      href="/createProduct"
                    >
                      Add
                    </a>
                    <a
                      className="inline-flex items-center  rounded-md text-sm font-semibold text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 focus:outline-none  font-Nunito focus:ring-[2px] focus:ring-[#2563eb]"
                      href="/importfile"
                    >
                      Import
                    </a>
                  </div>
                </div>
                <div className="p-6 border-t dark:border-gray-700 md:border-t-0 md:border-l">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 text-gray-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      ></path>
                    </svg>
                    <div className="ml-4 text-lg leading-7 font-semibold">
                      <a href="/">Customers</a>
                    </div>
                  </div>
                  <div className="ml-12 flex flex-wrap gap-y-4 gap-x-6">
                    <div className="w-full mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Manage your customers
                    </div>

                    <a
                      className="inline-flex items-center  rounded-md text-sm font-semibold text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 focus:outline-none  font-Nunito focus:ring-[2px] focus:ring-[#2563eb]"
                      href="/list"
                    >
                      List
                    </a>

                    <a
                      className="inline-flex items-center  rounded-md text-sm font-semibold text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 focus:outline-none  font-Nunito focus:ring-[2px] focus:ring-[#2563eb]"
                      href="/addcustomers"
                    >
                      Add
                    </a>
                    <a
                      className="inline-flex items-center  rounded-md text-sm font-semibold text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 focus:outline-none  font-Nunito focus:ring-[2px] focus:ring-[#2563eb]"
                      href="/importcustomerfile"
                    >
                      Import
                    </a>
                  </div>
                </div>
                <div className="p-6 border-t dark:border-gray-700">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 text-gray-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      ></path>
                    </svg>
                    <div className="ml-4 text-lg leading-7 font-semibold">
                      <a href="/">Invoices</a>
                    </div>
                  </div>
                  <div className="ml-12 flex flex-wrap gap-y-4 gap-x-6">
                    <div className="w-full mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Manage your invoices
                    </div>
                    <a
                      className="inline-flex items-center  rounded-md text-sm font-semibold text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 focus:outline-none  font-Nunito focus:ring-[2px] focus:ring-[#2563eb]"
                      href="/"
                    >
                      List
                    </a>
                    <a
                      className="inline-flex items-center  rounded-md text-sm font-semibold text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 focus:outline-none  font-Nunito focus:ring-[2px] focus:ring-[#2563eb]"
                      href="/"
                    >
                      Add
                    </a>
                  </div>
                </div>
                <div className="p-6 border-t dark:border-gray-700 md:border-l">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 text-gray-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      ></path>
                    </svg>
                    <div className="ml-4 text-lg leading-7 font-semibold">
                      <a href="/">Quotations</a>
                    </div>
                  </div>
                  <div className="ml-12 flex flex-wrap gap-y-4 gap-x-6">
                    <div className="w-full mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Manage your quotations
                    </div>
                    <a
                      className="inline-flex items-center  rounded-md text-sm font-semibold text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 focus:outline-none  font-Nunito focus:ring-[2px] focus:ring-[#2563eb]"
                      href="/"
                    >
                      List
                    </a>
                    <a
                      className="inline-flex items-center  rounded-md text-sm font-semibold text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 focus:outline-none  font-Nunito focus:ring-[2px] focus:ring-[#2563eb]"
                      href="/"
                    >
                      Add
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Dashboard;
