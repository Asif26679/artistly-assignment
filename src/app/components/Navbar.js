"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  UserPlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo */}
        <Link href="/artist" className="text-2xl font-extrabold tracking-wide flex items-center gap-2">
          <Squares2X2Icon className="w-6 h-6 text-purple-500" />
          Artistly
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/artist" className="hover:text-purple-400 flex items-center gap-1">
            <Squares2X2Icon className="w-5 h-5" />
            Artists
          </Link>
          <Link href="/onboarding" className="hover:text-purple-400 flex items-center gap-1">
            <UserPlusIcon className="w-5 h-5" />
            Onboard
          </Link>
          <Link href="/dashboard" className="hover:text-purple-400 flex items-center gap-1">
            <HomeIcon className="w-5 h-5" />
            Dashboard
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden px-6 pt-2 pb-4 space-y-3 transition-all duration-300 ${
          isOpen ? "block bg-black/80 backdrop-blur" : "hidden"
        }`}
      >
        <Link
          href="/artist"
          className="block text-white hover:text-purple-400 text-base"
          onClick={() => setIsOpen(false)}
        >
           Artists
        </Link>
        <Link
          href="/onboarding"
          className="block text-white hover:text-purple-400 text-base"
          onClick={() => setIsOpen(false)}
        >
           Onboard Artist
        </Link>
        <Link
          href="/dashboard"
          className="block text-white hover:text-purple-400 text-base"
          onClick={() => setIsOpen(false)}
        >
           Dashboard
        </Link>
       
      </div>
    </nav>
  );
}

