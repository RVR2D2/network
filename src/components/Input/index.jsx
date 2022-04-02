const CustomInput = ({ type, onChange }) => {
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
