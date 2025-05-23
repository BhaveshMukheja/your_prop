import React from "react";
import logo from "../../Assets/companyLogo.png";
import avatar from "../../Assets/avatar.png";
import { FaRegCompass } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoCopyOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div>
      <nav class="bg-white border-gray-200 border-b-2 border-gray-300">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a
            href="https://mansio.ai/"
            target="blank"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} alt="Company Logo" className="w-36" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            class="hidden w-full md:block md:w-auto flex justify-center items-center"
            id="navbar-default"
          >
            <ul class="font-medium flex justify-center items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
              <li>
                <span className="inline-flex items-center justify-center space-x-2">
                  <FaRegCompass className="text-brand-logo" />
                  <a
                    href="#"
                    className="block text-brand-logo  rounded-sm bg-transparent pb-1 "
                    aria-current="page"
                  >
                    Discover
                  </a>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center justify-center space-x-2">
                  <CiHeart className="" />
                  <a
                    href="#"
                    className="block  rounded-sm bg-transparent pb-1 "
                    aria-current="page"
                  >
                    Likes
                  </a>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center justify-center space-x-2">
                  <IoCopyOutline className="" />
                  <a
                    href="#"
                    className="block  rounded-sm bg-transparent pb-1 "
                    aria-current="page"
                  >
                    Matches
                  </a>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center justify-center space-x-2 border-2 border-gray-300 space-x-3 p-1">
                  <img
                    class="w-8 h-8 rounded-full"
                    src={avatar}
                    alt="Rounded avatar"
                  ></img>
                  <RxHamburgerMenu />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
