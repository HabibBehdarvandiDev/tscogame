import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <header className="w-full overflow-x-hidden min-h-14 shadow-sm flex justify-between items-center px-4">
      <button className="rounded-md text-zinc-700">
        <FaBarsStaggered className="w-5 h-5 m-2" />
      </button>

      <Link href={"/"}>
        <Image src={Logo} alt="Logo.png" width={50} height={50} />
      </Link>


      <button className="rounded-md text-zinc-700">
        <FiShoppingCart className="w-5 h-5 m-2" />
      </button>
    </header>
  );
};

export default Header;
