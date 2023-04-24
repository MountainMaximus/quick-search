import React from "react";
import styles from "./Button.module.scss";
interface IButton {
  children: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}
export const Button: React.FC<IButton> = ({ children, onClick, type }) => {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};
