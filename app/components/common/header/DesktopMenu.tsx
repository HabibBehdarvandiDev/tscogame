import Link from "next/link";
import HeaderLinks from "./HeaderLinks";

const DesktopMenu = () => {
  return (
    <nav className="hidden md:flex text-zinc-200 space-x-4 lg:space-x-7">
      {HeaderLinks.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className="hover:text-primary transition-colors duration-300 mx-2"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default DesktopMenu;
