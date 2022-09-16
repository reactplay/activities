import { useState, useRef, useEffect } from "react";

import { FiPlus, FiMinus } from "react-icons/fi";

const FAQs = ({ faqs }) => {
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
      <h1 className="font-primary text-white text-5xl tracking-wider">FAQs</h1>
      <div className="p-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="w-full flex-col justify-center items-start mt-3"
          >
            <div className="inline-flex justify-between items-center w-full">
              <h2 className="font-primary text-white md:text-3xl text-2xl tracking-wider md:mr-48">
                {faq.question}
              </h2>
              {active === index ? (
                <button
                  className={`font-primary md:text-2xl text-xl text-[#010326] md:p-3 p-2 bg-[#00F2FE] border-2 border-[#00F2FE] rounded-full inline-flex justify-center items-center`}
                  onClick={() => toggleAnswer(index)}
                >
                  <FiMinus />
                </button>
              ) : (
                <button
                  className={`font-primary text-2xl text-[#00F2FE] md:p-3 p-2 border-2 border-gray-500 rounded-full inline-flex justify-center items-center`}
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
                  ? `block mt-2 max-w-3xl font-body text-gray-500`
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
