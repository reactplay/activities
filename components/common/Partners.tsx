import Image from 'next/image';

const Partners = ({ metainfo }) => {
    if (!metainfo || !metainfo.partners) {
        return null;
    }
    return (
        <section
            id="sponsors"
            className="relative flex flex-col justify-center items-center py-28 md:px-16 px-8"
        >
            <div className="absolute right-1 top-0 md:w-44 md:h-44 w-20 h-20 ">
                <Image
                    src={require(`/public/${metainfo.name}/PartnersPolygon.svg`)}
                    alt="Partners Polygon"
                    layout="responsive"
                />
            </div>

            <h1 className="font-primary text-white text-5xl tracking-wider relative before:content[''] before:absolute before:w-1/4 before:h-1 before:-bottom-2 before:border-b-[3px] before:rounded-sm md:before:left-24 before:left-20 before:border-[#32F9E5]">
                Our Sponsors
            </h1>
            <div className="container max-w-screen-xl">
                {metainfo ? (
                    <>
                        {metainfo.partners.map((p, p_i) => {
                            return (
                                <div
                                    className="mt-5 flex flex-col justify-center items-center py-10"
                                    key={p_i}
                                >
                                    <div className="md:w-2/5 md:h-2/5 w-1/2 h-1/2">
                                        <a href={`${p.link}`} target="_blank" rel="noreferrer">
                                            <Image
                                                src={require(`/public/${metainfo.name}/partner0.png`)}
                                                alt={`${p.display} logo`}
                                                layout="responsive"
                                            />
                                        </a>
                                    </div>
                                    <p className="text-center text-gray-300 font-body mt-5">
                                        {p.text}
                                    </p>
                                    <div className="text-[#00F2FE] hover:underline font-body mt-5 md:px-56">
                                        <a href={`${p.link}`} rel="noreferrer" target="_blank">
                                            Read {p.display} documentation
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </>
                ) : null}

                {/*  */}
            </div>
        </section>
    );
};

export default Partners;
