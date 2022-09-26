import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import TailWindLogo from "../public/tailwindcss-logotype.svg";
import NextJsLogo from "../public/Nextjs-logo.png";

const TechCreditPage = () => {
  return (
    <Layout
      title="Tech Stack & Credits"
      description="Know the technology stack and the credits."
    >
      <div className="container max-w-screen-xl mx-auto py-16">
        <h2 className="font-primary mb-6 text-3xl md:text-5xl text-center text-slate-100 relative before:content[''] before:absolute before:w-16 before:h-1 before:-bottom-2 before:border-b-[3px] before:rounded-sm before:left-1/2 before:-translate-x-1/2 before:border-[#32F9E5]">
          Tech Stack
        </h2>
        <ul className="mt-8 text-slate-500 flex flex-row gap-4 justify-center flex-wrap font-body mb-32">
          <li className="bg-slate-50 h-40 flex items-center">
            <Link href={`https://nextjs.org/`}>
              <a
                target="_blank"
                className="block bg-slate-50 py-2 px-8 md:px-16"
              >
                <Image
                  src={NextJsLogo}
                  alt="Footer React Logo"
                  width={160}
                  height={95}
                />
                <span className="sr-only">Next.js</span>
              </a>
            </Link>
          </li>
          <li className="bg-slate-50 h-40 flex items-center">
            <Link href={`https://tailwindcss.com/`}>
              <a target="_blank" className="block py-2 px-8 md:px-16">
                <Image
                  src={TailWindLogo}
                  alt="Footer React Logo"
                  width={160}
                  height={160}
                />
                <span className="sr-only">Tailwind CSS</span>
              </a>
            </Link>
          </li>
        </ul>

        <h2 className="font-primary mb-6 text-3xl md:text-5xl text-center text-slate-100 relative before:content[''] before:absolute before:w-16 before:h-1 before:-bottom-2 before:border-b-[3px] before:rounded-sm before:left-1/2 before:-translate-x-1/2 before:border-[#32F9E5]">
          Credits
        </h2>
        <ul className="text-slate-500 font-body text-center mx-8">
          <li className="mb-4">
            <a
              className="text-slate-400 underline underline-offset-1 hover:text-slate-200"
              href="https://www.freepik.com/free-vector/coding-workshop-concept-illustration_21864183.htm#query=coding-workshop-concept-illustration&position=1&from_view=search&track=sph"
            >
              Home banner image by storyset
            </a>{" "}
            on Freepik
          </li>
          <li className="mb-4">
            <a
              className="text-slate-400 underline underline-offset-1 hover:text-slate-200"
              href="https://www.freepik.com/free-vector/code-typing-concept-illustration_10259340.htm#query=code-typing-concept-illustration&position=0&from_view=search&track=sph"
            >
              Register section coding by storyset
            </a>{" "}
            on Freepik
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default TechCreditPage;
