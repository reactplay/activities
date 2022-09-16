import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const MobileHeader = ({ links, setMobileActive }) => {
  return (
    <>
      <div className="fixed top-0 w-full h-screen block justify-center items-center bg-[#051630] z-50 overscroll-none font-primary text-white transition-all duration-200 ease-in-out">
        <div className="pt-5 px-4 flex justify-end items-center">
          <button
            onClick={() => setMobileActive(false)}
            className="inline-flex justify-center items-center"
          >
            <AiOutlineClose size={35} />
          </button>
        </div>

        <nav className="mt-10 w-full h-full flex flex-col justify-start items-center">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <a className="uppercase mt-14 text-2xl tracking-widest">
                {link.name}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

const Header = () => {
  const links = [
    {
      name: "About",
      href: "/#about",
    },
    {
      name: "Challenges",
      href: "/#challenges",
    },
    {
      name: "Sponsor",
      href: "/#sponsor",
    },
    {
      name: "Judges",
      href: "/#judges",
    },
    {
      name: "Faqs",
      href: "/#faqs",
    },
  ];
  const [mobileActive, setMobileActive] = useState(false);
  console.log(mobileActive);
  return (
    <>
      <header className="pt-5 pb-1 px-4 flex md:justify-center justify-end items-baseline bg-transparent font-primary text-white">
        <div className="md:inline-flex hidden justify-center items-baseline mx-auto">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <a className="uppercase mr-16 text-lg tracking-widest">
                {link.name}
              </a>
            </Link>
          ))}
        </div>
        <button
          onClick={() => setMobileActive(true)}
          className="md:hidden inline-flex justify-center items-center z-10"
        >
          <AiOutlineMenu size={35} />
        </button>
      </header>
      {mobileActive && (
        <MobileHeader links={links} setMobileActive={setMobileActive} />
      )}
    </>
  );
};

export default Header;
