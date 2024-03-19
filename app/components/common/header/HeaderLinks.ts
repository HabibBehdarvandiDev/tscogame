import { GoHome } from "react-icons/go";

type HeaderLinksType = {
  title: string;
  href: string;
  icon?: React.ReactNode;
};

const HeaderLinks: HeaderLinksType[] = [
  {
    title: "صفحه اصلی",
    href: "/",
  },
  {
    title: "فروشگاه",
    href: "/store",
  },
  {
    title: "خدمات",
    href: "/services",
  },
  {
    title: "وبلاگ",
    href: "/blog",
  },
  {
    title: "اخبار",
    href: "/news",
  },
  {
    title: "همکاری",
    href: "/work-with-us",
  },
  {
    title: "درباره ما",
    href: "/about",
  },
  {
    title: "ارتباط با ما",
    href: "/contact",
  },
  {
    title: "سوالات متداول",
    href: "/faq",
  },
];

export default HeaderLinks;
