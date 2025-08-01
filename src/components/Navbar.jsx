import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <nav
          className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 transition-all duration-300 ${
              scrolled
                  ? "bg-primary/90 backdrop-blur-sm shadow-md"
                  : "bg-transparent"
          }`}
      >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link
              to='/'
              className='flex items-center gap-2'
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
          >
            <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
            <p className='text-white text-[18px] font-bold cursor-pointer flex'>
              Yasser SANHAJI &nbsp;
              <span className='sm:block hidden'>| 3DPortfolio</span>
            </p>
          </Link>

          {/* Desktop nav */}
          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((nav) => (
                <li
                    key={nav.id}
                    className={`${
                        active === nav.title ? "text-white" : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-200`}
                    onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            ))}
          </ul>

          {/* Mobile nav */}
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
                src={toggle ? close : menu}
                alt='menu'
                className='w-[28px] h-[28px] object-contain cursor-pointer'
                onClick={() => setToggle(!toggle)}
            />

            <div
                className={`${
                    toggle ? "flex" : "hidden"
                } absolute top-16 right-4 left-4 bg-primary/95 backdrop-blur-md shadow-lg flex-col gap-6 p-6 rounded-xl z-20 transition-all duration-300 ease-in-out`}
            >
              <ul className='flex flex-col gap-4'>
                {navLinks.map((nav) => (
                    <li
                        key={nav.id}
                        className={`font-medium text-[16px] cursor-pointer ${
                            active === nav.title ? "text-white" : "text-gray-400"
                        } hover:text-white transition-colors duration-200`}
                        onClick={() => {
                          setToggle(false);
                          setActive(nav.title);
                        }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
