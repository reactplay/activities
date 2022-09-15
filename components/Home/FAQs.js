import { useState, useRef, useEffect } from "react";
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
      <div className="p-5">
        <div>
          <button
            className={`question-section ${active}`}
            onClick={toggleAnswer}
          >
            +
          </button>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p ref={contentRef} className={active ? `block` : `hidden`}>
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
