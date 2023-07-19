import React, { useState } from "react";
import Navbar from "./Navbar";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Footer from "./Footer";

const AddNewCustomer = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postal_code: "",
    state: "",
    country: "",
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
    navigate("/list");
    toast.success("Welcome Back to List");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if name, email, and phone fields are empty
    const { name, email, phone } = formData;

    if (!name || !email & !phone) {
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
                Add New Customer
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Please fill the form below to add a customer.
                <div className="disabled:opacity-25 transition mt-4">
                  <Button
                    className="appearance-none"
                    onClick={submitHandler}
                    name="LIST CUSTOMERS"
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
                        htmlFor="company"
                      >
                        <span>Company</span>
                      </label>
                    </div>
                    <input
                      type="text"
                      // className="appearance-none py-2 pl-3 border-gray-300 dark:border-gray-700 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 autofill:bg-white dark:autofill:bg-gray-800 mt-1 block w-full placeholder:text-gray-400 dark:placeholder:text-gray-500"
                      className="appearance-none font-Nunito pl-3 text-slate-300 border focus:outline-none focus:border-gray-500 focus:ring-[#687A92] focus:ring-[3px] border-[#e5e7eb] dark:border-gray-700  rounded-md shadow-sm dark:bg-gray-800 dark:autofill:bg-gray-800 mt-1 block w-full sm:h-10 h-[7vh] dark:placeholder:text-gray-500"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <div className="flex items-center justify-between">
                      <label
                        className="block font-medium text-sm text-gray-700 dark:text-gray-300 flex-1"
                        htmlFor="email"
                      >
                        <span>Email</span>
                      </label>
                    </div>
                    <input
                      type="text"
                      // className="appearance-none py-2 pl-3 border-gray-300 dark:border-gray-700 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 autofill:bg-white dark:autofill:bg-gray-800 mt-1 block w-full placeholder:text-gray-400 dark:placeholder:text-gray-500"
                      className="appearance-none font-Nunito pl-3 text-slate-300 border focus:outline-none focus:border-gray-500 focus:ring-[#687A92] focus:ring-[3px] border-[#e5e7eb] dark:border-gray-700  rounded-md shadow-sm dark:bg-gray-800 dark:autofill:bg-gray-800 mt-1 block w-full sm:h-10 h-[7vh] dark:placeholder:text-gray-500"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                    />
                    {isFormSubmitted && !formData.email && (
                      <div className="mt-1">
                        <p className="text-sm text-red-600">
                          The Email field is required.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <div className="flex items-center justify-between">
                      <label
                        className="block font-medium text-sm text-gray-700 dark:text-gray-300 flex-1"
                        htmlFor="phone"
                      >
                        <span>Phone</span>
                      </label>
                    </div>
                    <input
                      type="text"
                      className="appearance-none font-Nunito pl-3 text-slate-300 border focus:outline-none focus:border-gray-500 focus:ring-[#687A92] focus:ring-[3px] border-[#e5e7eb] dark:border-gray-700  rounded-md shadow-sm dark:bg-gray-800 dark:autofill:bg-gray-800 mt-1 block w-full sm:h-10 h-[7vh] dark:placeholder:text-gray-500"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                    />
                    {isFormSubmitted && !formData.phone && (
                      <div className="mt-1">
                        <p className="text-sm text-red-600">
                          The phone field is required when email is not present.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <div className="flex items-center justify-between">
                      <label
                        className="block font-medium text-sm text-gray-700 dark:text-gray-300 flex-1"
                        htmlFor="address"
                      >
                        <span>Address</span>
                      </label>
                    </div>
                    <input
                      type="text"
                      className="appearance-none font-Nunito pl-3 text-slate-300 border focus:outline-none focus:border-gray-500 focus:ring-[#687A92] focus:ring-[3px] border-[#e5e7eb] dark:border-gray-700  rounded-md shadow-sm dark:bg-gray-800 dark:autofill:bg-gray-800 mt-1 block w-[130vh] sm:h-10 h-[7vh] dark:placeholder:text-gray-500"
                      id="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Address"
                    />
                  </div>

                  <br></br>

                  <div className="col-span-6 sm:col-span-3">
                    <div className="flex items-center justify-between">
                      <label
                        className="block font-medium text-sm text-gray-700 dark:text-gray-300 flex-1"
                        htmlFor="city"
                      >
                        <span>City</span>
                      </label>
                    </div>
                    <input
                      type="text"
                      className="appearance-none font-Nunito pl-3 text-slate-300 border focus:outline-none focus:border-gray-500 focus:ring-[#687A92] focus:ring-[3px] border-[#e5e7eb] dark:border-gray-700  rounded-md shadow-sm dark:bg-gray-800 dark:autofill:bg-gray-800 mt-1 block w-full sm:h-10 h-[7vh] dark:placeholder:text-gray-500"
                      id="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <div className="flex items-center justify-between">
                      <label
                        className="block font-medium text-sm text-gray-700 dark:text-gray-300 flex-1"
                        htmlFor="postal_code"
                      >
                        <span>Postal Code</span>
                      </label>
                    </div>
                    <input
                      type="text"
                      className="appearance-none font-Nunito pl-3 text-slate-300 border focus:outline-none focus:border-gray-500 focus:ring-[#687A92] focus:ring-[3px] border-[#e5e7eb] dark:border-gray-700  rounded-md shadow-sm dark:bg-gray-800 dark:autofill:bg-gray-800 mt-1 block w-full sm:h-10 h-[7vh] dark:placeholder:text-gray-500"
                      id="postal_code"
                      value={formData.postal_code}
                      onChange={handleChange}
                      placeholder="Postal Code"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <div className="flex items-center justify-between">
                      <label
                        className="block font-medium text-sm text-gray-700 dark:text-gray-300 flex-1"
                        htmlFor="state"
                      >
                        <span>State</span>
                      </label>
                    </div>
                    <input
                      type="text"
                      className="appearance-none font-Nunito pl-3 text-slate-300 border focus:outline-none focus:border-gray-500 focus:ring-[#687A92] focus:ring-[3px] border-[#e5e7eb] dark:border-gray-700  rounded-md shadow-sm dark:bg-gray-800 dark:autofill:bg-gray-800 mt-1 block w-full sm:h-10 h-[7vh] dark:placeholder:text-gray-500"
                      id="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="State"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <div className="flex items-center justify-between">
                      <label
                        className="block font-medium text-sm text-gray-700 dark:text-gray-300 flex-1"
                        htmlFor="country"
                      >
                        <span>Country</span>
                      </label>
                    </div>
                    <input
                      type="text"
                      className="appearance-none font-Nunito pl-3 text-slate-300 border focus:outline-none focus:border-gray-500 focus:ring-[#687A92] focus:ring-[3px] border-[#e5e7eb] dark:border-gray-700  rounded-md shadow-sm dark:bg-gray-800 dark:autofill:bg-gray-800 mt-1 block w-full sm:h-10 h-[7vh] dark:placeholder:text-gray-500"
                      id="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="Country"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end px-4 py-3 bg-gray-50 dark:bg-black/50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md">
                <div className="mr-3">
                  <div
                    className="text-sm text-gray-600 dark:text-gray-400"
                    style={{ display: "none" }}
                  >
                    Saved.
                  </div>
                </div>
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

export default AddNewCustomer;
