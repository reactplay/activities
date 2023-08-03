import React from "react";

const Prizes = ({ metainfo }) => {
  let prizeList = metainfo?.prizes;

  return (
    <section
      id="cta"
      className="relative bg-brand-highlight mt-16 flex flex-col  py-24 md:px-28 px-5 justify-center items-center overflow-clip "
    >
      <div className="container flex flex-col justify-center items-center gap-4 mx-auto max-w-screen-xl">
        <h1 className="text-[#010326] font-primary text-5xl tracking-wider relative before:content[''] before:absolute before:w-1/4 before:h-1 before:-bottom-2 before:border-b-[3px] before:rounded-sm before:left-28 before:border-[#010326]">
          Prizes and Rewards
        </h1>
        <div className="flex md:flex-row flex-col justify-center items-center md:mx-auto md:gap-12 gap-8 mt-16 flex-wrap justify-around md:w-auto w-[100%]">
          {prizeList
            ? prizeList.map((item, i) => (
                <div
                  key={i}
                  className="text-black bg-[#010326] !text-white p-6 py-10 rounded-xl text-center md:w-[27%] w-[80%]"
                >
                  <p className="text-[50px]">{item?.icon}</p>
                  <h4 className="py-2 font-bold text-xl"> {item.position}</h4>
                  <p className="py-2 text-md">{item.prize}</p>
                </div>
              ))
            : "No prizes"}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
