import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from './Navigation.module.css';
import { authSelectors } from "../../../redux/auth";
import { AiOutlineRead, AiFillHome } from "react-icons/ai";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={styles.navigation}>
      <NavLink to="/" className={styles.link} activeClassName={styles.activeLink}>
        <div className={styles.icon}><AiFillHome/></div>
        <span>Home page</span>
      </NavLink>

      {isLoggedIn && (
      <NavLink to="/contacts" className={styles.link} activeClassName={styles.activeLink}>
          <div className={styles.icon}><AiOutlineRead/></div>
          <span>Contacts page</span>
      </NavLink>)}
    </nav>
)};

export default Navigation;