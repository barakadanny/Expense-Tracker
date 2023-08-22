import React from "react";

function ExpenseItem() {
  return (
    <div className="bg-gray-100 cursor-pointer p-2  ease-out duration-300 hover:scale-105">
      <div className="flex justify-between">
        <div>March 28th 2023 </div>
        <div>
          <h2>Car Insurance</h2>
          <div className="text-xl font-semibold mt-1">$294.67</div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
