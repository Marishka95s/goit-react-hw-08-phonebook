import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';
import { AiOutlineUserAdd, AiOutlineUserSwitch } from "react-icons/ai";

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" exact className={styles.link} activeStyle={styles.activeLink}>
        <div className={styles.icon}><AiOutlineUserAdd /></div>
        <span className={styles.pageName}>
        Registration page
        </span>
      </NavLink>
      <NavLink to="/login" exact className={styles.link} activeStyle={styles.activeLink}>
        <div className={styles.icon}><AiOutlineUserSwitch /></div>
        <span className={styles.pageName}>
        Login page</span>
      </NavLink>
    </div>
  );
}