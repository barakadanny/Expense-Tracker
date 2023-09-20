import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/UI/Nav";
import Expenses from "./components/Expenses/Expenses";
import Home from "./components/Expenses/Home";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Dummy data 1",
    amount: 420,
    date: new Date(2020, 5, 12),
  },
  {
    id: "e2",
    title: "Dummy data 2",
    amount: 127,
    date: new Date(2019, 5, 12),
  },
  {
    id: "e3",
    title: "Dummy data 3",
    amount: 983,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e4",
    title: "Dummy data 4",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="py-5 bg-primaryColor">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-2xl ">
        <Nav />
        <div className="mt-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/expenses"
              element={
                <Expenses items={expenses} addExpense={addExpenseHandler} />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
