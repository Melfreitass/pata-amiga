import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <div className={styles.logo}>
          <img src={logo} alt="PataAmiga" />

          <div className={styles.logoText}>
            <span>PataAmiga</span>
            <small>CLÍNICA & PETSHOP</small>
          </div>
        </div>

        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Sobre
          </NavLink>

          <NavLink
            to="/contato"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Contato
          </NavLink>
        </nav>

        <NavLink to="/agendamento" className={styles.button}>
          Agendar horário
        </NavLink>

      </div>
    </header>
  );
}

export default Header;