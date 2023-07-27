import React from "react";

const ModalDelete = ({ name, onCancel, onConfirm }) => {
  return (
    <div class="modal m-auto bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto sm:max-w-sm">
      <div class="px-6 py-4">
        <div class="text-lg font-bold">
          <span>Delete Customer {name}</span>
        </div>
        <div class="mt-4">
          <p>Please confirm that you would like to delete the record?</p>
        </div>
      </div>
      <div class="flex flex-row justify-end px-6 py-4 gap-4 bg-gray-100 dark:bg-gray-900 text-right">
        <button
          onClick={onCancel}
          type="button"
          class="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded-md font-semibold text-xs uppercase tracking-widest shadow-sm hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25 transition"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          type="button"
          class="inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 active:bg-red-600 disabled:opacity-25 transition"
        >
          Yes, delete
        </button>
      </div>
    </div>
  );
};

export default ModalDelete;
