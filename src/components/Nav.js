import { NavLink } from "react-router-dom";
import React from "react";

function Nav() {
  return (
    <div className=" text-textColor1 ">
      <ul className="flex justify-center bg-secondaryColor py-[0.3rem] rounded-lg mx-auto max-w-[24.2rem]">
        <li>
          <NavLink
            to="/"
            className="py-2 px-4 rounded-lg hover:bg-greenColor  hover:text-black"
            activeClassName="active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/expenses"
            activeClassName="active"
            className="py-2 px-4 rounded-lg hover:bg-greenColor hover:text-black"
          >
            Expenses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="py-2 px-4 rounded-lg hover:bg-greenColor hover:text-black"
            // activeClassName="active"
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="py-2 px-4 rounded-lg hover:bg-greenColor hover:text-black"
            // activeClassName="active"
          >
            Contact us
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
