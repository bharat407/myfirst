import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Button from "../Button";
import { toast } from "react-hot-toast";

const ImportProductsForm = () => {
  const handleAdd = () => {
    toast.error("Developing");
  };
  return (
    <div className="page min-h-screen font-Nunito bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
      <Navbar />
      <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1 flex justify-between">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Import Products
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Please upload the excel file to import records.
              </p>
              <div className="flex items-center gap-4 flex-wrap mt-4">
                <a
                  className="inline-flex items-center px-4 py-3 bg-blue-600 border-0 rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 active:bg-blue-700 disabled:opacity-25 transition"
                  href="/product"
                >
                  List Products
                </a>
                <a
                  href="/importfile"
                  className="inline-flex items-center px-4 py-3 bg-blue-600 border-0 rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 active:bg-blue-700 disabled:opacity-25 transition"
                >
                  Export Products
                </a>
              </div>
            </div>
            <div className="px-4 sm:px-0"></div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form autoComplete="off">
              <div className="px-4 py-5 bg-white dark:bg-gray-900 sm:p-6 shadow sm:rounded-tl-md sm:rounded-tr-md">
                <div className="grid grid-cols-6 gap-6">
                  <div className="w-full col-span-full">
                    <label htmlFor="file-upload" className="block font-medium">
                      Excel File
                    </label>
                    <div className="border-gray-300 dark:border-gray-700 mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                          ></path>
                        </svg>
                        <div className="flex items-center justify-center py-2">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-300"
                          >
                            <span className="font-semibold">Select file</span>
                            <input
                              type="file"
                              className="sr-only"
                              id="file-upload"
                              name="file-upload"
                              accept=".xls,.xlsx,application/vnd.ms-excel"
                            />
                            <p className="pl-1">or drag and drop</p>
                          </label>
                        </div>
                        <div className="text-xs">
                          <div>
                            Excel file should have name, price, details, taxes,
                            tax_method and custom fields columns.
                          </div>
                          <div>The name and price columns are required.</div>
                          <div>
                            taxes column could have multiple tax names separated
                            by a comma.
                          </div>
                          <div className="mt-3">
                            The custom fields can be any number of columns.
                          </div>
                          <div>
                            The column title must be the custom field name that
                            you have already added in the settings.
                          </div>
                        </div>
                        {/* ---- */}
                        {/* ---- */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end px-4 py-3 bg-gray-50 dark:bg-black/50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md">
                <Button name="Save" onClick={handleAdd} />
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ImportProductsForm;
