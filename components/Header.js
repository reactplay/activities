import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { PrimaryButton } from "./Buttons";
import Image from "next/image";

import { useRouter } from "next/router";

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

const Header = ({ links, metainfo, secondary = false }) => {
  const [mobileActive, setMobileActive] = useState(false);
  const router = useRouter();
  const redirectToRegistration = () => {
    router.push("events/22/hackrplay/registration");
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
        <header className="pt-6 pb-1 px-4 flex md:justify-center justify-end items-baseline bg-transparent font-primary text-white z-10">
          <div className="md:inline-flex hidden justify-center items-baseline mx-auto z-10">
            {links &&
              links.map((link, index) => (
                <Link key={index} href={`${link.href}`} scroll={false}>
                  <a className="uppercase mr-16 last:mr-0 text-lg tracking-widest">
                    {link.name}
                  </a>
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
