import { NavLink } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";

import OffCanvas from "../Home/OffCanvas";
import { useState } from "react";

const Navbar = () => {
  const [offCanvasState, setOffCanvasState] = useState(false)
  const navbar_buttons = [
    {
      name: "Home",
    },
    {
      name: "Projects",
    },
    {
      name: "About",
    },
  ];

  const hamburgerHandler = () =>{
    let state = offCanvasState
    setOffCanvasState(!offCanvasState);
  }

  return (
    <>
      <div className="hidden md:flex md:px-2 lg:flex w-1/2 lg:w-2/4 h-10 bg-gray-600 opacity-70 rounded-full justify-around items-center shadow-lg">
        <a className="text-teal-300 uppercase font-semibold font-mono mg:text-xl lg:text-2xl">
          PORTFOLIO
        </a>
        {navbar_buttons.map((button, index) => (
          <NavLink
            key={index}
            to={`${button.name.toLowerCase()}`}
            className="lg:text-xl text-white uppercase font-semibold hover:text-orange-200 transition duration-300 px-4 py-1"
          >
            {button.name}
          </NavLink>
        ))}
      </div>
      <div className="md:hidden w-full">
        <GiHamburgerMenu size={32} color="teal" onClick={hamburgerHandler} />
      </div>
      {offCanvasState === true ? <OffCanvas hamburgerHandler={hamburgerHandler}/> : "" }
    </>
  );
};

export default Navbar;
