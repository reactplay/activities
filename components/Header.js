import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";
import { PrimaryButton, SecondaryOutlinedButton } from "@/components/Buttons";

const Header = ({ homepage }) => {
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
  return (
    <header
      className={`pt-5 pb-1 px-4 flex items-baseline bg-transparent font-primary text-white `}
    >
      {homepage ? null : (
        <div className="px-6 z-[9]">
          <h1 className="font-primary text-4xl tracking-wide text-white ">
            H a c k<span className="text-[#00F2FE]">-r-</span>p l a y
          </h1>
          <div className="inline-flex justify-center items-center border border-[#68FDC6] text-[#68FDC6] font-primary text-lg leading-none -mt-1">
            <span className="bg-[#68FDC6] text-[#051630] pt-2 pb-1 px-2 tracking-wild">
              Sep 14 - 16, 2022
            </span>
          </div>
        </div>
      )}

      <div
        className={`flex flex-1 ${homepage ? "justify-center" : "justify-end"}`}
      >
        <div className={`flex -1 inline-flex justify-center items-baseline`}>
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <a className="uppercase mr-16 text-lg tracking-widest">
                {link.name}
              </a>
            </Link>
          ))}
          {homepage ? null : (
            <PrimaryButton handleOnClick={() => redirectToRegistration()}>
              Register <FiCheckCircle className="ml-2 my-auto" size={20} />
            </PrimaryButton>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
