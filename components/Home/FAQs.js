import { useState, useRef, useEffect } from "react";

import { FiPlus, FiMinus } from "react-icons/fi";

const FAQs = () => {
  const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAnswer = () => {
    setActive(!active);
  };

  return (
    <div className="relative mt-16 flex flex-col justify-center items-center py-24 px-16">
      <h1 className="font-primary text-white text-5xl tracking-wider">FAQs</h1>
      <div className="p-10">
        <div className="max-w-3xl w-full flex-col justify-center items-start">
          <div className="inline-flex justify-center items-center w-full">
            <h2 className="font-primary text-white text-3xl tracking-wider">
              Lorem ipsum dolor sit amet
            </h2>
            {active ? (
              <button
                className={`font-primary text-2xl text-[#010326] ml-96 p-3 bg-[#00F2FE] border-2 border-[#00F2FE] rounded-full inline-flex justify-center items-center`}
                onClick={toggleAnswer}
              >
                <FiMinus />
              </button>
            ) : (
              <button
                className={`font-primary text-2xl text-[#00F2FE] ml-96 p-3 border-2 border-gray-500 rounded-full inline-flex justify-center items-center`}
                onClick={toggleAnswer}
              >
                <FiPlus />
              </button>
            )}
          </div>

          <p
            ref={contentRef}
            className={
              active ? `block mt-2 max-w-2xl font-body text-gray-500` : `hidden`
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum
            est ultricies integer quis. Iaculis urna id volutpat lacus laoreet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
