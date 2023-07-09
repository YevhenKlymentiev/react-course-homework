import { ReactComponent as Logo } from 'assets/images/logo.svg';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      Questionnaire
    </div>
  );
}

export default Header;
