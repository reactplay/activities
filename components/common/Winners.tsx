import Image from 'next/image';
import { useEffect } from 'react';
import DottedPattern from '../../public/common/DottedPattern.svg';
import Lines from '../../public/common/Lines.svg';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { MdOutlineArticle } from 'react-icons/md';
import ConfettiGenerator from 'confetti-js';
import Link from 'next/link';

const Winners = ({ winners, mentions }) => {
    useEffect(() => {
        const confettiSettings = {
            target: 'winners-canvas',
            max: '110',
            size: '1.2',
            clock: '30',
            rotate: true,
            colors: [
                [0, 242, 254],
                [104, 253, 198]
            ]
        };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();

        return () => confetti.clear();
    }, []);

    const email2Slug = (email) => {
        return encodeURIComponent(email);
    };

    return (
        <section
            id="winners"
            className="relative mt-16 bg-white bg-opacity-10 flex flex-col justify-center items-center py-24 px-6"
        >
            <canvas className="w-full h-full absolute" id="winners-canvas"></canvas>
            <div className="absolute md:-left-16 md:top-6 -left-20 top-3">
                <Image src={DottedPattern} alt="Dotted Pattern" width={155} height={155} />
            </div>
            <div className="md:block hidden absolute left-36 -top-16 ">
                <Image src={Lines} alt="Lines" width={800} height={800} />
            </div>

            <h1 className="font-primary text-white text-6xl tracking-wider relative before:content[''] before:absolute before:w-3/5 before:h-1 before:-bottom-1 before:border-b-[3px] before:rounded-sm before:left-0 before:right-0 before:mx-auto before:border-[#32F9E5]">
                Winners
            </h1>
            <div className="inline-flex md:flex-row flex-col justify-center items-start md:mt-20 mt-6 py-3 z-10 mx-auto">
                {winners.map((winner, index) => (
                    <div
                        key={index}
                        className="relative md:mr-32 md:last:mr-0 md:mt-0 mt-16 flex mb-8 flex-col justify-center items-start font-body max-w-xs first:text-[#ffd700] text-[#c0c0c0] last:text-[#cd7f32]"
                    >
                        <div className={``}></div>
                        <div className="absolute md:-top-16 md:-left-11 -top-20 -left-10 inline-flex justify-center items-start">
                            <span className="font-bold md:text-9xl text-[7rem] opacity-70">
                                {winner.position}
                            </span>
                            <span className="font-bold md:text-5xl text-4xl -ml-2 md:mt-2 mt-8 opacity-70">
                                {winner.position === '1'
                                    ? 'st'
                                    : winner.position === '2'
                                    ? 'nd'
                                    : 'rd'}
                            </span>
                        </div>

                        {winner.twitter ? (
                            <>
                                <div
                                    className={`w-64 h-64 bg-gradient-to-b ${
                                        winner.position === '1'
                                            ? 'from-[#ffd700] via-[#ffcc33] to-[#ffd700]'
                                            : winner.position === '2'
                                            ? 'from-[#c0c0c0] via-[#e5e4e2] to-[#c0c0c0]'
                                            : 'from-[#cd7f32] via-[#cd7f32cf] to-[#cd7f32]'
                                    } ${
                                        winner.position === '1'
                                            ? 'shadow-[0_0_10px_1px_rgba(255,215,0,1)]'
                                            : winner.position === '2'
                                            ? 'shadow-[0_0_10px_1px_rgba(192,192,192,1)]'
                                            : 'shadow-[0_0_10px_1px_rgba(205,127,50,1)]'
                                    } rounded-md rounded-tl-[4rem] p-[4px] relative before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_3s_infinite] before:bg-gradient-to-r before:from-transparent ${
                                        winner.position === '1'
                                            ? 'before:via-[#fff3b2]'
                                            : winner.position === '2'
                                            ? 'before:via-[#ececec]'
                                            : 'before:via-[#e6bf98]'
                                    }  before:to-transparent isolate
                  overflow-hidden
                  "
              `}
                                >
                                    <Link
                                        href={`https://reactplay.io/contributors/${email2Slug(
                                            winner.email
                                        )}/badges`}
                                        className="text-white mt-2 text-lg py-2"
                                    >
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white py-2"
                                        >
                                            <Image
                                                alt={winner.name}
                                                src={winner.avatar}
                                                layout="responsive"
                                                width={`100%`}
                                                height={`100%`}
                                                style={{
                                                    borderRadius: '0.375rem',
                                                    borderTopLeftRadius: '4rem'
                                                }}
                                            />
                                        </a>
                                    </Link>
                                </div>
                            </>
                        ) : null}
                        <Link
                            href={`https://reactplay.io/contributors/${email2Slug(
                                winner.email
                            )}/badges`}
                            className="text-white mt-2 text-lg py-2"
                        >
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white py-2"
                            >
                                {winner.name}
                            </a>
                        </Link>
                        <a
                            href={winner.projectLink}
                            rel="noreferrer"
                            target="_blank"
                            className="text-gray-400 w-48 hover:underline"
                        >
                            {winner.projectName}
                        </a>
                        <div className="inline-flex justify-start items-center">
                            <a
                                className="mt-3 inline-flex justify-center items-center font-body text-[#00F2FE]  transition-all duration-150 mr-5"
                                href={`${winner.article}`}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <MdOutlineArticle size={25} />
                            </a>

                            <a
                                className="mt-3 inline-flex justify-center items-center font-body text-[#00F2FE]  transition-all duration-150 mr-5"
                                href={`${winner.twitter}`}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <FaTwitter size={22} />
                            </a>
                            <a
                                className="mt-3 inline-flex justify-center items-center font-body text-[#00F2FE]  transition-all duration-150"
                                href={`${winner.projectSource}`}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <FaGithub className="" size={22} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full flex flex-col justify-center items-center mt-20">
                <h1 className="font-primary text-white text-4xl tracking-wider relative before:content[''] before:absolute before:w-3/5 before:h-1 before:-bottom-1 before:border-b-[3px] before:rounded-sm before:left-0 before:right-0 before:mx-auto before:border-[#32F9E5]">
                    Honourable Mentions
                </h1>
                <div className="inline-flex md:flex-row flex-col justify-center items-start md:mt-14 mt-6 py-3 z-10 mx-auto">
                    {mentions.map((mention, index) => (
                        <div
                            key={index}
                            className="md:mr-12 md:last:mr-0 md:mt-0 mt-4 flex mb-8 flex-col justify-center items-start font-body max-w-xs"
                        >
                            {mention.twitter ? (
                                <div
                                    className={`w-52 h-52 bg-gradient-to-br ${mention.gradient} ${mention.shadow} rounded-md rounded-tl-[4rem] p-[3px]`}
                                >
                                    <Link
                                        href={`https://reactplay.io/contributors/${email2Slug(
                                            mention.email
                                        )}/badges`}
                                        className="text-white mt-2 text-lg py-2"
                                    >
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white py-2"
                                        >
                                            <Image
                                                alt={mention.name}
                                                src={mention.avatar}
                                                layout="responsive"
                                                width={`100%`}
                                                height={`100%`}
                                                style={{
                                                    borderRadius: '0.375rem',
                                                    borderTopLeftRadius: '4rem'
                                                }}
                                            />
                                        </a>
                                    </Link>
                                </div>
                            ) : null}
                            <Link
                                href={`https://reactplay.io/contributors/${email2Slug(
                                    mention.email
                                )}/badges`}
                                className="text-white mt-2 text-lg py-2"
                            >
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white py-2"
                                >
                                    {mention.name}
                                </a>
                            </Link>

                            <a
                                href={mention.projectLink}
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-400 w-48 text-sm hover:underline"
                            >
                                {mention.projectName}
                            </a>
                            <div className="inline-flex justify-start items-center">
                                <a
                                    className="mt-3 inline-flex justify-center items-center font-body text-[#00F2FE]  transition-all duration-150 mr-5"
                                    href={`${mention.article}`}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <MdOutlineArticle size={23} />
                                </a>
                                <a
                                    className="mt-3 inline-flex justify-center items-center font-body text-[#00F2FE]  transition-all duration-150 mr-5"
                                    href={`${mention.twitter}`}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <FaTwitter size={20} />
                                </a>
                                <a
                                    className="mt-3 inline-flex justify-center items-center font-body text-[#00F2FE]  transition-all duration-150"
                                    href={`${mention.projectSource}`}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <FaGithub className="" size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Winners;
