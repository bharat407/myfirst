import React from "react";
import Navbar from "../Navbar";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Footer from "../Footer";
import { useForm } from "react-hook-form";

const AddNewProduct = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    navigate("/product");
    toast.success("Welcome Back to Product List");
  }

  const createProduct = async (data) => {
    try {
      const savedUserResponse = await fetch(
        `${process.env.REACT_APP_BASE_URL}/createProduct`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // Send the entire data object directly
        }
      );

      if (savedUserResponse.ok) {
        navigate("/product");
        toast.success("Product Added Successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page min-h-screen font-Nunito bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
      <Navbar />
      <div className="max-w-7xl font-Nunito mx-auto py-10 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-3 md:gap-6" autoComplete="off">
          <div className="md:col-span-1 flex justify-between">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Add New Product
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Please fill the form below to add a product.
                <div className="disabled:opacity-25 transition mt-4">
                  <Button
                    className="appearance-none"
                    onClick={submitHandler}
                    name="LIST Products"
                  />
                </div>
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit(createProduct)}>
              <div className="px-4 py-5 bg-white dark:bg-gray-900 sm:p-6 shadow sm:rounded-tl-md sm:rounded-tr-md">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <div className="flex items-center justify-between">
                      <label
                        className="block font-medium text-sm text-gray-700 dark:text-gray-300 flex-1"
                        htmlFor="name"
                      >
                        {" "}
                        Name{" "}
                      </label>
                    </div>
                    <input
                      type="text"
                      className="appearance-none font-Nunito pl-3 text-slate-300 border focus:outline-none focus:border-gray-500 focus:ring-[#687A92] focus:ring-[3px] border-[#e5e7eb] dark:border-gray-700 rounded-md shadow-sm dark:bg-gray-800 dark:autofill:bg-gray-800 mt-1 block w-full sm:h-10 h-[7vh] dark:placeholder:text-gray-500"
                      id="name"
                      placeholder="Name"
                      {...register("name")}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <div className="flex items-center justify-between">
                      <label
                        className="block font-medium text-sm text-gray-700 dark:text-gray-300 flex-1"
                        htmlFor="price"
                      >
                        {" "}
                        Price{" "}
                      </label>
                    </div>
                    <input
                      type="number"
                      className="appearance-none font-Nunito pl-3 text-slate-300 border focus:outline-none focus:border-gray-500 focus:ring-[#687A92] focus:ring-[3px] border-[#e5e7eb] dark:border-gray-700 rounded-md shadow-sm dark:bg-gray-800 dark:autofill:bg-gray-800 mt-1 block w-full sm:h-10 h-[7vh] dark:placeholder:text-gray-500"
                      id="price"
                      placeholder="Price"
                      {...register("price")}
                    />
                  </div>
                  <div className="col-span-full">
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        className="block font-medium text-sm text-gray-700 dark:text-gray-300"
                        htmlFor="details"
                      >
                        {" "}
                        Details{" "}
                      </label>
                      <textarea
                        id="details"
                        type="text"
                        // className="border-gray-300 mt-1 block w-full rounded-md shadow-sm border dark:border-gray-700 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 dark:bg-gray-800 dark:focus:border-gray-600 dark:focus:ring-opacity-50 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                        className="appearance-none font-Nunito pl-3 text-slate-300 border focus:outline-none focus:border-gray-500 focus:ring-[#687A92] focus:ring-[3px] border-[#e5e7eb] dark:border-gray-700 rounded-md shadow-sm dark:bg-gray-800 dark:autofill:bg-gray-800 mt-1 block w-full sm:h-10 h-[7vh] dark:placeholder:text-gray-500"
                        style={{ height: "70px" }}
                        {...register("details")}
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <div className="flex items-center justify-between">
                      <label
                        className="block font-medium text-sm text-gray-700 dark:text-gray-300 flex-1"
                        htmlFor="tax_rates"
                      >
                        {" "}
                        Tax Rates{" "}
                      </label>
                    </div>
                    <div className="relative  mt-1 mb-2 flex items-center">
                      <select
                        id="tax_rates"
                        multiple
                        className=" pr-8 w-full block text-base py-2 pl-4 placeholder-gray-400 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                        {...register("taxrates")}
                      >
                        <option value="">Select Tax Rates</option>
                        <option value="5%">5%</option>
                        <option value="10%">10%</option>
                        <option value="15%">15%</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-span-6  sm:col-span-3">
                    <div className="flex  items-center justify-between">
                      <label
                        className="block  font-medium text-sm text-gray-700 dark:text-gray-300 flex-1"
                        htmlFor="tax_method"
                      >
                        {" "}
                        Tax Method{" "}
                      </label>
                    </div>
                    <div className="relative mt-1 mb-2 flex items-center">
                      <select
                        id="tax_method"
                        className="pr-8  w-full block text-base py-2 pl-4 placeholder-gray-400 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                        {...register("taxmethod")}
                      >
                        <option value="">Select Tax Method</option>
                        <option value="Method A">Method A</option>
                        <option value="Method B">Method B</option>
                        <option value="Method C">Method C</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end px-4 py-3 bg-gray-50 dark:bg-black/50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md">
                <div className="disabled:opacity-25 transition mt-4">
                  <button
                    type="submit"
                    className="flex items-center px-4 py-3 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 active:bg-blue-700 focus:outline-none transition ease-in-out duration-150 ml-4 font-Nunito"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AddNewProduct;
