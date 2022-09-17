export const PrimaryButton = ({ children, handleOnClick }) => {
  return (
    <button
      className="inline-flex justify-center items-center md:py-4 md:px-7 py-3 px-5 uppercase bg-gradient-to-br from-[#00F2FE] via-[#32F9E5] to-[#68FDC6] text-[#010326] font-primary text-xl rounded-sm"
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, handleOnClick }) => {
  return (
    <button
      className="inline-flex justify-center items-center md:py-4 md:px-7 py-3 px-5 uppercase bg-white text-[#010326] font-primary text-xl rounded-sm"
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};
export const SecondaryOutlinedButton = ({ children, handleOnClick }) => {
  return (
    <button
      className="inline-flex justify-center items-center md:py-4 md:px-7 py-3 px-5 uppercase bg-transparent text-white border border-white font-primary text-xl rounded-sm"
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};
