import React from "react";

import s from "./style.module.css";
import loader from "../../assets/loading.svg";

const Preloader = () => {
  return (
    <>
      <img className={s.loader} src={loader} />
    </>
  );
};

export default Preloader;
