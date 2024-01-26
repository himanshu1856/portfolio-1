import { NavLink } from 'react-router-dom';


const Navbar = () => {

  const navbar_buttons = [
    {
      "name": "Home"
    },
    {
      "name": "Projects"
    },
    {
      "name": "About"
    }
  ];

  return (
      <div className="lg:flex w-2/4 h-10 bg-gray-600 opacity-70 rounded-full justify-around items-center shadow-lg">
        <a className='text-teal-300 uppercase font-semibold font-mono text-2xl'>PORTFOLIO</a>
          {navbar_buttons.map((button, index) => (
            <NavLink key={index} to={`${button.name.toLowerCase()}`} className="text-white uppercase font-semibold hover:text-orange-200 transition duration-300 px-4 py-1">
              {button.name}
            </NavLink>
          ))}
      </div>
  )
}



export default Navbar;
