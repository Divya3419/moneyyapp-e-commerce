import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <Link className={styles.link} to="/">
          Product
        </Link>
      </div>
      <div>
        <Link className={styles.link} to="/cart">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
