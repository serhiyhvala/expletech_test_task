import styles from './header.module.scss'
import {Link} from "react-router-dom";
import {githubURL} from "@constants/url.ts";

const Header = () => {
  return (
      <header className={styles.header}>
        <div className={styles.container}>
          <Link to='/' className={styles.link}>PostsHide</Link>
          <a href={githubURL} className={styles.link}>Github</a>
        </div>
      </header>
  );
};

export default Header;
