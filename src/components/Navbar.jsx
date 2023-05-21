import React, { useState } from 'react';
import { navLinks } from '../constants';
import { logo, close, menu } from '../assets/index';
import styles from '../constants/style';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <header className="flex justify-between px-12 items-center py-4 md:items-start">
        <figure>
          <img src={logo} alt="logo" className="max-w-[100px]" />
        </figure>
        <nav
          className={`md:absolute md:w-fit md:h-fit md:inset-0 md:animate-sidebar md:m-auto md:z-10 ${
            toggleMenu ? 'block' : 'hidden'
          } nav:block`}
        >
          <ul
            className={`${styles.flexCenter} gap-6 md:flex-col md:bg-black-gradient md:rounded-2xl md:w-[50vw] md:h-[40vh] sm:w-[65vw]`}
          >
            {navLinks.map((navLink) => {
              return (
                <li className="capitalize text-dimWhite" title={navLink.title}>
                  <a href={`#${navLink.id}`}>{navLink.id}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className=" hidden md:block"
        >
          <img src={toggleMenu ? close : menu} alt="menu icon" />
        </button>
      </header>
    </>
  );
};
export default Navbar;
