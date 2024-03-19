"use client";

import { FaBarsStaggered, FaXTwitter } from "react-icons/fa6";
import HeaderLinks from "./HeaderLinks";
import Link from "next/link";
import { useState } from "react";
import { IoCloseOutline, IoLogoInstagram } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { LiaTelegram } from "react-icons/lia";
import Image from "next/image";
import Logo from "@/public/logo.png";

const MobileMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleMenuTrigger = () => {
    setOpen(!open);
  };

  return (
    <>
      <button
        className="rounded-md text-zinc-700 dark:text-white md:hidden"
        onClick={handleMenuTrigger}
      >
        <FaBarsStaggered className="w-5 h-5 m-2" />
      </button>
      <div
        className={`absolute md:hidden ${
          open ? "-translate-x-0" : "translate-x-full"
        } top-0 right-0 w-full h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white transition-transform duration-500 overflow-y-hidden`}
      >
        <button
          className="p-2 absolute top-4 left-4"
          onClick={handleMenuTrigger}
        >
          <IoCloseOutline className="w-7 h-7 m-2" />
        </button>
        <Link href={"/"} className="p-2 absolute top-4 right-4">
          <Image src={Logo} alt="Logo.png" width={40} height={40} />
        </Link>
        <ul className="w-full flex flex-col space-y-4 px-4 items-right mt-16">
          <input
            type="text"
            name="search"
            className="rounded-xl px-4 py-2 outline-none border-2 border-zinc-100 dark:border-zinc-800 focus:border-primary bg-white dark:bg-zinc-900"
            placeholder="جستجو در وبسایت"
          />
          {HeaderLinks.map((link, index) => (
            <li
              key={index}
              className="font-semibold text-lg my-2 hover:text-primary focus:text-primary border-b border-b-zinc-800 border-opacity-45 pb-2"
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
          <li className="flex space-x-4 justify-center">
            <Link
              href={"https://twitter.com/tscogame"}
              className="hover:text-blue-900 focus:text-blue-900"
            >
              <FaXTwitter className="w-7 h-7 m-2" />
            </Link>
            <Link href={"https://www.instagram.com/tscogame/"}>
              <IoLogoInstagram className="w-7 h-7 m-2" />
            </Link>
            <Link
              href={"https://www.youtube.com/channel/UCfnZH53GSr7v6vxRNpcbmZg"}
              className="hover:text-primary focus:text-primary"
            >
              <AiOutlineYoutube className="w-7 h-7 m-2" />
            </Link>
            <Link
              href={"https://www.t.me/tscogame"}
              className="hover:text-info focus:text-info"
            >
              <LiaTelegram className="w-7 h-7 m-2" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
