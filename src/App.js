import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ExpenseItem from "./components/ExpenseItem";
import Home from "./components/Home";

function App() {
  return (
    <div className="py-5 bg-primaryColor">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-2xl ">
        <Nav />
        <div className="mt-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expenses" element={<ExpenseItem />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
