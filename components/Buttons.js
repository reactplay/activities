export const PrimaryButton = ({
  children,
  handleOnClick,
  className,
  small = false,
  ...props
}) => {
  const buttonSize = small
    ? "md:pt-1 md:pb-0 md:px-4 py-2 px-4 text-lg"
    : "md:py-4 md:px-7 py-3 px-5 text-xl";

  return (
    <button
      {...props}
      className={`group inline-flex justify-center items-center ${buttonSize} uppercase bg-gradient-to-br from-[#00F2FE] via-[#32F9E5] to-[#68FDC6] text-[#010326] font-primary rounded-sm hover:bg-gradient-to-tl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-[9] ${className}`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({
  children,
  handleOnClick,
  className,
  small = false,
}) => {
  const buttonSize = small
    ? "md:py-3 md:px-5 py-2 px-4 text-lg"
    : "md:py-4 md:px-7 py-3 px-5 text-xl";

  return (
    <button
      className={`group inline-flex justify-center items-center ${buttonSize} uppercase bg-white text-[#010326] font-primary rounded-sm border border-white hover:border-[#010326] hover:bg-transparent transition-all duration-300 ${className}`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export const SecondaryLink = ({
  children,
  link,
  className,
  target,
  small = false,
}) => {
  const buttonSize = small
    ? "md:py-3 md:px-5 py-2 px-4 text-lg"
    : "md:py-4 md:px-7 py-3 px-5 text-xl";

  return (
    <a
      className={`group inline-flex justify-center items-center ${buttonSize} uppercase bg-white text-[#010326] font-primary rounded-sm border border-white hover:text-white hover:border-white hover:bg-transparent transition-all duration-300 ${className}`}
      href={link}
      target={target}
    >
      {children}
    </a>
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
      className={`group inline-flex justify-center items-center ${buttonSize} uppercase bg-transparent text-white border border-white font-primary rounded-sm hover:text-[#010326] hover:bg-white transition-all duration-300`}
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
  cclas,
}) => {
  return (
    <div className="px-2 flex justify-center items-center">
      <button
        disabled={disabled}
        selected={selected}
        className={`inline-flex justify-center items-center bg-transparent text-white disabled:opacity-50 disabled:cursor-not-allowed ${cclas}`}
        onClick={handleOnClick}
      >
        {children}
      </button>
    </div>
  );
};
