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

export const SecondaryOutlinedButtonDark = ({ children, handleOnClick }) => {
  return (
    <button
      className="inline-flex justify-center items-center py-4 px-7 uppercase bg-transparent text-grey-700 border border-grey-700 font-primary text-xl rounded-sm"
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export const ToolBarButton = ({
  children,
  handleOnClick,
  disabled,
  selected,
}) => {
  return (
    <div className="px-2 flex justify-center items-center">
      <button
        disabled={disabled}
        selected={selected}
        className={`inline-flex justify-center items-center bg-transparent text-white disabled:opacity-50 disabled:cursor-not-allowed selected:text-green`}
        onClick={handleOnClick}
      >
        {children}
      </button>
    </div>
  );
};
