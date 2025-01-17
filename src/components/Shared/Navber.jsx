import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbShoppingBag } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";

const Navber = () => {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
  ];
  return (
    <div className=" bg-slate-300 text-black">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link href={"/"}>
            <Image alt="" src="/assets/logo.svg" height="60" width="80" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className=" flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                className=" font-semibold hover:text-primary duration-300"
                href={item.path}
                key={item.path}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="navbar-end space-x-6">
          <div className=" flex space-x-4  items-center">
            <TbShoppingBag className=" text-xl" />
            <CiSearch className=" text-xl" />
          </div>
          <a className="btn btn-outline btn-primary px-8">Appointment</a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
