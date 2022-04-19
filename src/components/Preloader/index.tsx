// @ts-ignore
import s from "./style.module.css";
// @ts-ignore
import loader from "../../assets/loading.svg";

const Preloader = () => {
  return (
    <>
      <img className={s.loader} src={loader} />
    </>
  );
};

export default Preloader;
