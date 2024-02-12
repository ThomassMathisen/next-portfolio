"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Image from "next/image";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Links */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 w-36 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1 ml-1" w>
            thomas
          </span>
          <span className="w-24 h-8 ml-1 rounded bg-white text-black flex items-center justify-center">
            mathisen
          </span>
        </Link>
      </div>
      {/* Social Links */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="/">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* Responsive Menu */}
      <div className="md:hidden"></div>
      {/* Menu Button */}
      <button
        className="w-10 h-8 flex flex-col justify-between z-50 relative"
        onClick={() => setOpen(!open)}
      >
        <div className="w-10 h-1 bg-black rounded"></div>
        <div className="w-10 h-1 bg-black rounded"></div>
        <div className="w-10 h-1 bg-black rounded"></div>
      </button>
      {/* Menu List */}
      {open && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
          {links.map((link) => (
            <Link href={link.url} key={link.title}>
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
