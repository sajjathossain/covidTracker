import { Card } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <Card className={styles.navbar}>
      <div className={styles.navbarBrand}>Covid19</div>
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
    </Card>
  )
}



export default Navbar