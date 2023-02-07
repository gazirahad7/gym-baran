import Image from "next/image";
import { BtnSmall } from "./Buttons";

import logo from "../assets/images/logo.png";

import { useState } from "react";

const Navbar = () => {

  const [openMenu, setMenu] = useState(false)

  if (openMenu === true) {
    window.addEventListener('click', (e) => {
      console.log(e.target.classList.contains('menuList'))

      if (e.target.classList.contains('menuList')) {
        setMenu(false)
      }
    })
  }
  return (
    <>
      <nav class="   px-2 sm:px-4 py-4 rounded  ">
        <div class=" flex flex-wrap items-center justify-between ">
          <a href="#" class="">
            <div class="h-14  w-44">
              <Image src={logo} alt="logo" className="scale-125 mt-ml" />
            </div>
          </a>
          <button  onClick={(e) => setMenu(!openMenu)}
            data-collapse-toggle="navbar-default"
            type="button"
            class=" inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-300 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col items-center  p-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:border-gray-700">
              <li>
                <a href="#" class="nav-li-a">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="nav-li-a">
                  Program
                </a>
              </li>
              <li>
                <a href="#" class="nav-li-a">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" class="nav-li-a">
                  About us
                </a>
              </li>

              <li>
                <a href="#">
                  <BtnSmall />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      {openMenu ? (
          <div className="menuList px-6 py-4 visible md:invisible drop-shadow-xl">
            <ul >
              <li>
                <a href="#" className="nav-li-a">
                  Home
                </a>
              </li>

              <li>
                <a href="#"  className="nav-li-a">Programs</a>
              </li>
              <li>
                <a href="#"  className="nav-li-a">Blog</a>
              </li>
              <li>
                <a href="#"  className="nav-li-a">About us</a>
              </li>
              <li >
         
                  <BtnSmall />
            
              </li>
            </ul>
          </div>
        ) : null}
    </>
  );
};

export default Navbar;
