import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Clicked and Update!");
  };
  return (
    <div className="bg-[#2e2d2d] text-white cursor-pointer p-3 mb-4 ">
      <div className="flex justify-between">
        <ExpenseDate date={props.date} />
        <div>
          <h2>{props.title}</h2>
          <div className="text-xl font-semibold mt-1">${props.amount}</div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
