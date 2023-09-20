import { Routes, Route } from "react-router-dom";
import Nav from "./components/UI/Nav";
import Expenses from "./components/Expenses/Expenses";
import Home from "./components/Expenses/Home";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const addExpenseHandler = (expense) => {
    console.log("in the App js");
    console.log(expense);
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
