import cx from 'classnames';

import { ReactComponent as Logo } from 'assets/images/logo.svg';
import QuestionnaireNavLinks from 'components/features/Questionnaire/NavLinks/NavLinks';
import QuestionnaireResetBtn from 'components/features/Questionnaire/ResetBtn/ResetBtn';
import styles from './Header.module.scss';

function Header(props) {
  const {
    isDarkThemeActive,
    toggleDarkTheme
  } = props;

  function handleToggleThemeBtnClick(ev) {
    ev.preventDefault();

    toggleDarkTheme();
  }

  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      Questionnaire
      <div className={styles.controls}>
        <QuestionnaireNavLinks />
        <button
          type="button"
          className={cx(styles.toggleThemeBtn, {[styles.toggleThemeBtnActive]: isDarkThemeActive})}
          onClick={handleToggleThemeBtnClick}
        />
        <QuestionnaireResetBtn />
      </div>
    </div>
  );
}

export default Header;
