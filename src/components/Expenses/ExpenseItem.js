import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Clicked and Update!");
    // console.log("Clicked");
  };
  return (
    <div className="bg-[#2e2d2d] text-white cursor-pointer p-3 ">
      <div className="flex justify-between">
        <ExpenseDate date={props.date} />
        <div>
          <h2>{title}</h2>
          <div className="text-xl font-semibold mt-1">${props.amount}</div>
          <button onClick={clickHandler}>change title</button>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
