import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ReactPlayLogo from "@/public/ReactPlayLogo.svg";

const MobileHeader = ({ links, setMobileActive, redirectToRegistration }) => {
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

        <nav className="mt-16 w-full h-full flex flex-col justify-start items-center">
          {links.map((link, index) => (
            <Link key={index} href={`${link.href}`} scroll={false}>
              <a
                onClick={() => setMobileActive(false)}
                className="uppercase mb-14 text-3xl tracking-widest"
              >
                {link.name}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

const Header = ({ links, metainfo, secondary = false, hustleHomePage }) => {
  const [mobileActive, setMobileActive] = useState(false);
  const router = useRouter();
  const redirectToRegistration = () => {
    router.push("/hackrplay/2022/registration");
  };

  return (
    <>
      {secondary ? (
        <header className="pt-4 pb-2 md:px-10 px-5 inline-flex justify-between items-center bg-transparent font-primary text-white z-10 w-full">
          <div className="md:w-40 w-36 z-10">
            <Link href={`/`}>
              <a>
                <Image
                  src={require(`/public/${metainfo.name}/NavbarLogo.png`)}
                  alt="Navbar Logo"
                  layout="responsive"
                />
              </a>
            </Link>
          </div>
        </header>
      ) : (
        <header
          className={`${
            hustleHomePage
              ? "justify-end sm:justify-between items-center px-4 xl:px-16 py-4 bg-slate-900"
              : "pt-6 pb-1 px-4 md:justify-center justify-end items-baseline bg-brand-bg "
          } flex font-primary text-white z-10`}
        >
          {hustleHomePage && (
            <Link href="/">
              <div className="hidden sm:block cursor-pointer">
                <Image src={ReactPlayLogo} alt="Logo" />
              </div>
            </Link>
          )}
          <div
            className={`${
              hustleHomePage
                ? "hidden md:inline-flex"
                : "md:inline-flex hidden justify-center items-baseline mx-auto z-10"
            }`}
          >
            {links &&
              links.map((link, index) => (
                <Link key={index} href={link.href} scroll={false}>
                  {link.href.includes("http") ? (
                    <a
                      className="uppercase mr-12 lg:mr-16 last:mr-0 text-lg tracking-widest"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <a className="uppercase mr-12 lg:mr-16 last:mr-0 text-lg tracking-widest">
                      {link.name}
                    </a>
                  )}
                </Link>
              ))}
          </div>
          <button
            onClick={() => setMobileActive(true)}
            className="md:hidden inline-flex justify-center items-center z-10 py-2 px-4 border border-gray-400 text-[#00F2FE]"
          >
            <AiOutlineMenu size={20} />
          </button>
        </header>
      )}
      {!secondary && mobileActive && (
        <MobileHeader
          secondary={secondary}
          links={links}
          setMobileActive={setMobileActive}
          redirectToRegistration={redirectToRegistration}
        />
      )}
    </>
  );
};

export default Header;
