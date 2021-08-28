import { NavLink } from "react-router-dom";
import styles from './Navigation.module.css';
import { AiOutlineUserAdd, AiOutlineRead, AiOutlineUserSwitch } from "react-icons/ai";


const Navigation = () => (
    <nav className={styles.navigation}>
    <NavLink
      exact
      to="/register"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      <div className={styles.icon}><AiOutlineUserAdd /></div>
      Registration page
    </NavLink>

    <NavLink
      exact
      to="/login"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      <div className={styles.icon}><AiOutlineUserSwitch /></div>
      Login page
    </NavLink>

    <NavLink
      exact
      to="/contacts"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      <div className={styles.icon}><AiOutlineRead /></div>
      Contacts page
    </NavLink>
    </nav>
);

export default Navigation;