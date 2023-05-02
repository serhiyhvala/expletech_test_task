import {FC, ReactNode} from "react";
import styles from './button.module.scss'
import {Link} from "react-router-dom";

type ButtonProps = {
  children: ReactNode,
  link?: string,
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({children, link, onClick}) => {
  return (
      link ?
          <Link to={link} className={styles.button}>
            {children}
          </Link> :
          <button className={styles.button} onClick={onClick}>
            {children}
          </button>
  );
};

export default Button;
