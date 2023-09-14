import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center flex-wrap justify-evenly  sticky top-0 z-[1] bg-black text-white">
      <div>
        <img
          className="w-[150px]"
          src="https://heapware.netlify.app/static/media/logo.33bc2a457e9fcc66fc63.png"
          alt=""
        />
      </div>
      <div className="flex items-center flex-wrap sm:justift-center sm:items-center">
        <li className="list-none p-5">
          <Link href="/">Home</Link>
        </li>
        <li className="list-none p-5">
          <Link href="/about">About</Link>
        </li>
        <li className="list-none p-5">
          <Link href="/career">Career</Link>
        </li>
        <li className="list-none p-5">
          <Link href="#">Blog</Link>
        </li>
        <li className="list-none p-5">
          <Link href="#">Contact</Link>
        </li>
      </div>
      <div>
        <h1>Search</h1>
      </div>
    </div>
  );
};

export default Header;
