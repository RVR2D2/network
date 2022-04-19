import React from "react";

type PropsType = {
  type: string;
  onChange: () => void;
};

const CustomInput: React.FC<PropsType> = ({ type, onChange }) => {
  const defStyle = {
    border: "none",
    color: "#fff",
  };
  return (
    <>
      <input type={type} onChange={onChange} style={defStyle} />
    </>
  );
};

export default CustomInput;
