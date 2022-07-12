import { FC } from "react";
import s from "./Container.module.css";

const Container: FC = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default Container;
