import { useState, useRef, useEffect } from "react";

import { FiPlus, FiMinus } from "react-icons/fi";

const FAQs = ({ metainfo }) => {
  const [active, setActive] = useState("false");

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAnswer = (index) => {
    if (active === index) {
      return setActive("0");
    }
    setActive(index);
  };

  return (
    <div
      id="faqs"
      className="relative mt-16 flex flex-col justify-center items-center py-24 md:px-16 px-0"
    >
      <h1 className="font-primary text-white text-5xl tracking-wider relative before:content[''] before:absolute before:w-3/4 before:h-1 before:-bottom-2 before:border-b-[3px] before:rounded-sm before:left-2 before:border-[#32F9E5]">
        FAQs
      </h1>
      <div className="container max-w-screen-xl px-2.5 mt-9">
        {metainfo.faqs.map((faq, index) => (
          <div
            key={index}
            className="w-full flex-col justify-center items-start my-2 py-3 border-b-2 border-gray-800"
          >
            <div
              onClick={() => toggleAnswer(index)}
              className="inline-flex justify-between items-center w-full cursor-pointer"
            >
              <h2 className="font-body text-left font-bold text-white md:text-xl text-lg md:mr-40">
                {faq.question}
              </h2>
              {active === index ? (
                <button
                  className={`font-primary md:text-2xl text-xl text-brand-primary-highlight md:p-2 p-2 bg-brand-highlight border-2 border-brand-primary-highlight rounded-full inline-flex justify-center items-center`}
                  onClick={() => toggleAnswer(index)}
                >
                  <FiMinus />
                </button>
              ) : (
                <button
                  className={`font-primary text-2xl text-brand-highlight md:p-2 p-2 border-2 border-brand-primary-highlight rounded-full inline-flex justify-center items-center`}
                  onClick={() => toggleAnswer(index)}
                >
                  <FiPlus />
                </button>
              )}
            </div>

            <p
              ref={contentRef}
              className={
                active === index
                  ? `block mt-2 max-w-3xl font-body font-semibold text-sm text-gray-300`
                  : `hidden`
              }
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
