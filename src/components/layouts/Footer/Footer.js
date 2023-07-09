import { ReactComponent as Logo } from 'assets/images/logo.svg';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      2023 React Course
    </div>
  );
}

export default Footer;
