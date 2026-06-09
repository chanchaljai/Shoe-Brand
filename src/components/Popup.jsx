import React from "react";
import { IoMdClose } from "react-icons/io";

const Popup = ({ setShowPopup}) => {
  return (
    <div className="flex justify-center items-center fixed inset-0 bg-black/90">
      <div className="bg-white w-[90%] max-w-sm p-5 rounded-lg shadow-lg">
        <div className="flex justify-between">
          <h2>Order Now</h2>
          <IoMdClose className="cursor-pointer" onClick={() => setShowPopup(false)} />
        </div >
        <div className = "flex flex-col">
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-red-300 rounded px-2 py-1 mt-2"
          />
          <input
            type="text"
            placeholder="Enter your address"
            className="border border-red-300 rounded px-2 py-1 mt-2"
          />
          <button onClick={() => setShowPopup(false)}
           className="bg-red-600 text-white px-2 py-1 rounded mt-2 hover:bg-red-700 hover:cursor-pointer">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
