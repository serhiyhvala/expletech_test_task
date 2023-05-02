import {FC, ReactNode} from "react";
import styles from './button.module.scss'

type ButtonProps = {
  children: ReactNode
}

const Button :FC<ButtonProps>= ({children}) => {
  return (
      <button className={styles.button}>
        {children}
      </button>
  );
};

export default Button;
