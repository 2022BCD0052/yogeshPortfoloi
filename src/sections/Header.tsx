"use client"
import Link from "next/link";
export const Header = () => {


  return (
    <div>
    <div className="flex justify-center  items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-1 border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link href={"/aaa"} className="nav-item">
          home
        </Link>
        <Link href={"/contact"} className="nav-item">
          Project
        </Link>
        <Link href={"/about"} className="nav-item">
          About
        </Link>
        <button
          className="nav-item bg-white text-gray-800 hover:text-gray-900 hover:bg-white/70"
        >
          Contact
        </button>
      </nav>
    </div>
    </div>
  );
};
