import React from "react";

const PrimaryButton = ({ text, type, onClick, className }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(onClick);
    }
  };
  return (
    <div className={className}>
      <button
        type={type}
        className="w-full self-center font-button text-button bg-gray-700 py-3 rounded-lg text-gray-50"
        onClick={handleClick}
      >
        {/* bg-[#38A1ED] */}
        <b>{text}</b>
      </button>
    </div>
  );
};

export default PrimaryButton;