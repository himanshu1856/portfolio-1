import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const OffCanvas = ({hamburgerHandler}) => {
  return (
    <div className="md:hidden h-screen bg-black z-10 w-screen absolute top-0 p-3">
      <div className="flex justify-between">
        <a className="text-teal-300 uppercase font-semibold font-mono text-2xl">
          PORTFOLIO
        </a>
        <IoClose size={32} color="white" onClick={hamburgerHandler}/>
      </div>
      <div className="mt-20 text-center">
        <ul className="text-white text-2xl list-none leading-loose">
            <li>
                <NavLink to={'home'} onClick={hamburgerHandler}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'projects'} onClick={hamburgerHandler}>Projects</NavLink>
            </li>
            <li>
                <NavLink to={'about'} onClick={hamburgerHandler}>About</NavLink>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default OffCanvas;
