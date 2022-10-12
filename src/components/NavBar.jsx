import CartWidget from './CartWidget';
import styles from './Styles/NavBar.module.css'
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="bg-primary">
      <nav className={`${styles.nav} container`}>
        <div className={styles.nav__brand}>
          <Link to={'/'}>Gimek Hogar</Link>
        </div>
        <ul className={styles.nav__menu}>
          <li className={styles.nav__item}>
            <Link className={styles.nav__link} to={'/'}>Inicio</Link>
          </li>
          <li className={styles.nav__item}>
            <Link className={styles.nav__link} to={'/categoria/films'}>Peliculas</Link>
          </li>
          <li className={styles.nav__item}>
            <Link className={styles.nav__link} to={'/categoria/series'}>Series</Link>
          </li>
          <li className={styles.nav__item}>
            <Link className={styles.nav__link} to={'/carrito'}>
              <CartWidget />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
