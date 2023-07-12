import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Collection",
    },
    {
      id: 3,
      link: "About",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20  text-white nav">
      <div>
        <h1 className="text-sm uppercase font-Crimson font-extralight border p-2 border-white ml-2">
          This Interior
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize text-lg font-bold text-white font-Montserrat hover:border-b-2 duration-200 border-white">
            {link}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-lg font-bold text-white md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-lg font-bold text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 font-Montserrat cursor-pointer capitalize py-6 text-lg font-bold hover:border-b-2 duration-200 border-white">
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
