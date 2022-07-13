import { FC } from "react";
import s from "./Container.module.css";

interface IChildrenProps {
  children: React.ReactNode;
}

const Container: FC<IChildrenProps> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default Container;
