import React from "react";

const CustomInput = ({
  type,
  placeholder,
  name,
  className,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={className}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && touched ? (
        <p className="text-[#dc2626] text-left ml-5 text-sm">{error}</p>
      ) : null}
    </div>
  );
};

export default CustomInput;
