import React from "react";
import logo from "../assets/logo.svg";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-800">
      <div>
        <a className="h-20 w-80 block" href="/">
          <img src={logo} alt="SIM" className="w-full h-full" />
        </a>
      </div>
      <div className="w-full sm:max-w-md mt-6 px-6 py-4 dark:bg-gray-900 shadow-md overflow-hidden sm:rounded-lg">
        <form>
          <div className="mb-4 text-base text-gray-600 dark:text-gray-400 font-mono">
            Please login to access your account
          </div>
          <div>
            <label
              className="block font-medium text-sm text-gray-700 dark:text-gray-300"
              htmlFor="email"
            >
              <span>Email</span>
            </label>
            <input
              type="email"
              className="appearance-none pl-3 text-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-4 border-gray-500 dark:border-gray-700  rounded-md shadow-sm dark:bg-gray-800 dark:autofill:bg-gray-800 mt-1 block w-full sm:h-10 h-[7vh]"
              id="email"
              placeholder="xyz@gmail.com"
              required=""
            />
          </div>
          <div className="mt-4">
            <label
              className="block font-medium text-sm text-gray-700 dark:text-gray-300"
              htmlFor="password"
            >
              <span>Password</span>
            </label>
            <input
              type="password"
              className="appearance-none pl-3 text-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-4 border-gray-500 dark:border-gray-700  rounded-md shadow-sm dark:bg-gray-800 dark:autofill:bg-gray-800 mt-1 block w-full sm:h-10 h-[7vh]"
              id="password"
              required=""
              placeholder=""
              autoComplete="current-password"
            />
          </div>

          <div className="block mt-4">
            <label className="inline-flex items-center">
              <input
                id="remember"
                type="checkbox"
                className=" w-4 h-4 border border-gray-300 rounded checked:bg-blue-600 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                name="remember"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
          </div>

          <div className="flex items-center justify-end mt-4">
            <a className="underline text-sm link text-slate-300" href="/">
              Forgot your password?
            </a>
            <button
              type="submit"
              className="flex items-center px-4 py-3 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 active:bg-blue-700 focus:outline-none transition ease-in-out duration-150 ml-4"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
