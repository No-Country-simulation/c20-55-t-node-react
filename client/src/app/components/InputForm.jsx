import React from "react";

const InputForm = ({ placeholder, type, name, value, onChange, error, label }) => {
  return (
    <div className='containInput flex flex-col gap-2 w-[26.9375rem]'>
      {label && (
        <label className=' font-semibold pl-2'>{label}</label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='inputForm border-2 border-[#E5E5E5] rounded-lg  h-[3.5rem] p-[0.75rem_0.5rem] gap-[0.625rem] placeholder-[#8E8E8E]'
        autoComplete='off'
      />
      {error && (
        <p className='text-red-500 text-xs font-semibold pl-3'>{error}</p>
      )}
    </div>
  );
};

export default InputForm;
