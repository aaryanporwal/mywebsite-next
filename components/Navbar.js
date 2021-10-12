import styles from '../styles/Navbar.module.css';
import Sign from './Sign';
// backdrop-filter blur
export default function Navbar() {
  return (
    <nav className={styles.header}>
      <span>
        <Sign />
      </span>
      <div>
        <a href="">Projects</a>
        <a href="">Scrapbook</a>
        <a href="">Blog</a>
        <a href="">Resume</a>
      </div>
    </nav>
  );
}
