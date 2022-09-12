import Link from "next/link";

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
  return (
    <header className="pt-5 pb-1 px-4 flex justify-center items-baseline bg-transparent font-primary text-white">
      <div className="inline-flex justify-center items-baseline mx-auto">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <a className="uppercase mr-16 text-lg tracking-widest">
              {link.name}
            </a>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
