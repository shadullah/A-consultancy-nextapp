"use client";
import useScrollDirection from "@/hooks/useScrollDirection";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollDirection, isScrolled } = useScrollDirection();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full transition-all duration-300 z-10 ${
        scrollDirection === "down" ? "-top-[100px]" : "top-0"
      } ${
        isScrolled ? "bg-white/70 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between h-[100px] px-4 py-6 items-center">
        <Link href="/">
          <Image
            src="/Logo-For-Care2-Training-1.webp"
            alt="logo"
            width={60}
            height={60}
          />
        </Link>
        <div className="hidden md:block">
          <ul className="flex items-center gap-4">
            <li className="hover:text-gray-600 cursor-pointer">About</li>
            <li className="hover:text-gray-600 cursor-pointer">Services</li>
            <li className="hover:text-gray-600 cursor-pointer">Contact</li>
          </ul>
        </div>

        <button className="md:hidden text-gray-600" onClick={toggleMenu}>
          <FaBars />
        </button>

        {isMenuOpen && (
          <div className="md:hidden absolute top-[100px] left-0 right-0 bg-white shadow-lg">
            <ul className="flex flex-col items-center py-4 space-y-4">
              <li className="hover:text-gray-600 cursor-pointer w-full text-center py-2">
                About
              </li>
              <li className="hover:text-gray-600 cursor-pointer w-full text-center py-2">
                Services
              </li>
              <li className="hover:text-gray-600 cursor-pointer w-full text-center py-2">
                Contact
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
