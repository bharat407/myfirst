import React, { useState } from "react";
import Navbar from "../Navbar";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Footer from "../Footer";

const AddNewProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    details: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    navigate("/product");
    toast.success("Welcome Back to Product List");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if name, email, and phone fields are empty
    const { name, price } = formData;

    if (!name || !price) {
      toast.error("Please fill in all fields"); // Display error toast
      setIsFormSubmitted(true);
      return; // Stop form submission
    }

    // Handle form submission or data saving logic here
    toast.success("Submitted");
    console.log(formData);
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
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="px-4 py-5 bg-white dark:bg-gray-900 sm:p-6 shadow sm:rounded-tl-md sm:rounded-tr-md">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <div className="flex items-center justify-between">
                      <label
                        className="block font-medium text-sm text-gray-700 dark:text-gray-300 flex-1"
                        htmlFor="name"
                      >
                        <span>Name</span>
                      </label>
                    </div>
                    <input
                      type="text"
                      className="appearance-none font-Nunito pl-3 text-slate-300 border focus:outline-none focus:border-gray-500 focus:ring-[#687A92] focus:ring-[3px] border-[#e5e7eb] dark:border-gray-700 rounded-md shadow-sm dark:bg-gray-800 dark:autofill:bg-gray-800 mt-1 block w-full sm:h-10 h-[7vh] dark:placeholder:text-gray-500"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                    />
                    {isFormSubmitted && !formData.name && (
                      <div className="mt-1">
                        <p className="text-sm text-red-600">
                          The name field is required.
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <div className="flex items-center justify-between">
                      <label
                        className="block font-medium text-sm text-gray-700 dark:text-gray-300 flex-1"
                        htmlFor="price"
                      >
                        <span>Price</span>
                      </label>
                    </div>
                    <input
                      type="number"
                      className="appearance-none font-Nunito pl-3 text-slate-300 border focus:outline-none focus:border-gray-500 focus:ring-[#687A92] focus:ring-[3px] border-[#e5e7eb] dark:border-gray-700 rounded-md shadow-sm dark:bg-gray-800 dark:autofill:bg-gray-800 mt-1 block w-full sm:h-10 h-[7vh] dark:placeholder:text-gray-500"
                      id="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="Price"
                    />
                    {isFormSubmitted && !formData.price && (
                      <div className="mt-1">
                        <p className="text-sm text-red-600">
                          The price field is required.
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="col-span-full">
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        className="block font-medium text-sm text-gray-700 dark:text-gray-300"
                        htmlFor="details"
                      >
                        <span>Details</span>
                      </label>
                      <textarea
                        id="details"
                        type="text"
                        // className="border-gray-300 mt-1 block w-full rounded-md shadow-sm border dark:border-gray-700 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 dark:bg-gray-800 dark:focus:border-gray-600 dark:focus:ring-opacity-50 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                        className="appearance-none font-Nunito pl-3 text-slate-300 border focus:outline-none focus:border-gray-500 focus:ring-[#687A92] focus:ring-[3px] border-[#e5e7eb] dark:border-gray-700 rounded-md shadow-sm dark:bg-gray-800 dark:autofill:bg-gray-800 mt-1 block w-full sm:h-10 h-[7vh] dark:placeholder:text-gray-500"
                        style={{ height: "70px" }}
                        value={formData.details}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <div className="flex items-center justify-between">
                      <label
                        className="block font-medium text-sm text-gray-700 dark:text-gray-300 flex-1"
                        htmlFor="tax_rates"
                      >
                        <span>Tax Rates</span>
                      </label>
                    </div>
                    <div className="relative  mt-1 mb-2 flex items-center">
                      <select
                        id="tax_rates"
                        className="pr-8 w-full block text-base py-2 pl-4 placeholder-gray-400 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                        value={formData.taxRates}
                        onChange={handleChange}
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
                        <span>Tax Method</span>
                      </label>
                    </div>
                    <div className="relative mt-1 mb-2 flex items-center">
                      <select
                        id="tax_method"
                        className="pr-8  w-full block text-base py-2 pl-4 placeholder-gray-400 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                        value={formData.taxMethod}
                        onChange={handleChange}
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
                  <Button
                    className="appearance-none"
                    onClick={handleSubmit}
                    name="Save"
                  />
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
