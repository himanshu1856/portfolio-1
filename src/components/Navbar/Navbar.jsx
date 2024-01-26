import { Link } from 'react-router-dom';


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
      <div className="absolute top-5 lg:flex w-full h-14 bg-gray-600 opacity-70 rounded-full justify-around items-center shadow-lg">
        <a className='text-teal-300 uppercase font-semibold font-mono text-3xl'>PORTFOLIO</a>
          {navbar_buttons.map((button, index) => (
            <Link key={index} to={`${button.name.toLowerCase()}`} className="text-white uppercase font-semibold hover:text-orange-200 transition duration-300 px-4 py-1">
              {button.name}
            </Link>
          ))}
      </div>
  )
}



export default Navbar;
