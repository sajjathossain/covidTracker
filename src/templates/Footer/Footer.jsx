import { FaGithubAlt, FaLinkedin, FaDev, FaFacebook } from 'react-icons/fa'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socialLinks}>
        <li className={styles.linkContainer}>
          <a className={`${styles.link} ${styles.github}`} rel="noreferrer" target="_blank" href="https://github.com/sajjathossain"><FaGithubAlt /></a>
        </li>
        <li className={styles.linkContainer}>
          <a className={`${styles.link} ${styles.linkedIn}`} rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/sajjat-hossain-6477731ab/"><FaLinkedin /></a>
        </li>
        <li className={styles.linkContainer}>
          <a className={`${styles.link} ${styles.devTo}`} rel="noreferrer" target="_blank" href="https://dev.to/sajjathossain"><FaDev /></a>
        </li>
        <li className={styles.linkContainer}>
          <a className={`${styles.link} ${styles.facebook}`} rel="noreferrer" target="_blank" href="https://facebook.com/sajjadhosen.provel"><FaFacebook /></a>
        </li>
      </ul>
    </footer>
  )
}



export default Footer