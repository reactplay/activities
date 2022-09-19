export const PrimaryButton = ({ children, handleOnClick, small = false }) => {
  const buttonSize = small
    ? "md:pt-1 md:pb-0 md:px-4 py-2 px-4 text-lg"
    : "md:py-4 md:px-7 py-3 px-5 text-xl";

  return (
    <button
      className={`inline-flex justify-center items-center ${buttonSize} uppercase bg-gradient-to-br from-[#00F2FE] via-[#32F9E5] to-[#68FDC6] text-[#010326] font-primary rounded-sm`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, handleOnClick, small = false }) => {
  const buttonSize = small
    ? "md:py-3 md:px-5 py-2 px-4 text-lg"
    : "md:py-4 md:px-7 py-3 px-5 text-xl";

  return (
    <button
      className={`inline-flex justify-center items-center ${buttonSize} uppercase bg-white text-[#010326] font-primary rounded-sm`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};
export const SecondaryOutlinedButton = ({
  children,
  handleOnClick,
  small = false,
}) => {
  const buttonSize = small
    ? "md:py-3 md:px-5 py-2 px-4 text-lg"
    : "md:py-4 md:px-7 py-3 px-5 text-xl";

  return (
    <button
      className={`inline-flex justify-center items-center ${buttonSize} uppercase bg-transparent text-white border border-white font-primary rounded-sm`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};
