import React from "react";

const Button = ({ name, className, onClick }) => {
  return (
    <button
      // type="submit"
      type="button"
      className={`flex items-center px-4 py-3 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 active:bg-blue-700 focus:outline-none transition ease-in-out duration-150 ml-4 font-Nunito ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
