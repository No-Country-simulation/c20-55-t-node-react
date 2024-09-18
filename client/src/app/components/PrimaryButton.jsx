import React from "react";

const PrimaryButton = ({ text, type = "button", onClick, className, styles }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(onClick);
    }
  };
  return (
    <div className={className}>
      <button
        type={type}
        className={`w-[20.5rem] self-center font-button text-button bg-[#07323A] py-3 rounded-lg text-gray-50 ${styles}`}
        onClick={handleClick}
      >
        {/* bg-[#38A1ED] */}
        <b>{text}</b>
      </button>
    </div>
  );
};

export default PrimaryButton;
