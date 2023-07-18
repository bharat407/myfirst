import React from "react";

function CustomCheckbox({ id, name, label, className, onChange }) {
  return (
    <div className={`block ${className}`}>
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          id={id}
          className=" appearance-none w-4 h-4 border border-gray-300 rounded checked:bg-blue-600 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          name={name}
          onChange={onChange}
        />
        <span className="ml-2 text-sm text-gray-600 font-Nunito">{label}</span>
      </label>
    </div>
  );
}

export default CustomCheckbox;
