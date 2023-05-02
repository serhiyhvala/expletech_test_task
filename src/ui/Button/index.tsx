import {FC, ReactNode} from "react";
import styles from './button.module.scss'
import {Link} from "react-router-dom";

type ButtonProps = {
  children: ReactNode,
  link: string
}

const Button :FC<ButtonProps>= ({children, link}) => {
  return (
      <Link to={link} className={styles.button}>
        {children}
      </Link>
  );
};

export default Button;
