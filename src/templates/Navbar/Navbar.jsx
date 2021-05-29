import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { covid19Icon } from '../../img'

const Navbar = () => {
  return (
    <div className={`${styles.navbar}`}>
      <div className={styles.navbarBrand}>
        C
        <img src={covid19Icon} alt="icon" type="image/svg" className={styles.covid19Icon} />
        vid19
      </div>
      <ul className={styles.links}>
        <li className={styles.linkContainer}>
          <Link to="/" className={styles.link}>Home</Link>
        </li>
        <li className={styles.linkContainer}>
          <Link to="/about" className={styles.link}>About</Link>
        </li>
        <li className={styles.linkContainer}>
          <Link to="/contact" className={styles.link}>Contact</Link>
        </li>
      </ul>
    </div>
  )
}



export default Navbar