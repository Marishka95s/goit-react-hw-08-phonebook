import { NavLink } from "react-router-dom";
import styles from './UserMenu.module.css';
import { AiOutlineLogout } from "react-icons/ai";

const UserMenu = () => {
  return (
  <div className={styles.userMenu}>
    <p className={styles.email}>User email</p>
    
    <button type="submit" className={styles.backButton} > 
      <p className={styles.link}>Log out</p> 
      <div className={styles.icon}><AiOutlineLogout /></div> </button>
  </div>
)};

export default UserMenu;