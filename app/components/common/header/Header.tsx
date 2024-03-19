"use client";

import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Header = () => {
  return (
    <header className="w-full overflow-x-hidden min-h-14 flex justify-between items-center px-4 bg-white dark:bg-zinc-900 border-b-2 border-primary border-opacity-35 shadow-sm shadow-primary">
      <MobileMenu />

      <Link href={"/"}>
        <Image src={Logo} alt="Logo.png" width={50} height={50} />
      </Link>

      <DesktopMenu />

      <Link
        href={"/store"}
        className="rounded-md text-zinc-700 dark:text-white"
      >
        <FiShoppingCart className="w-5 h-5 m-2" />
      </Link>
    </header>
  );
};

export default Header;
