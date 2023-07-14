import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import { ReactComponent as Logo } from 'assets/images/logo.svg';
import QuestionnaireNavLinks from 'components/features/Questionnaire/NavLinks/NavLinks';
import QuestionnaireResetBtn from 'components/features/Questionnaire/ResetBtn/ResetBtn';
import { changeTheme } from 'store/modules/theme';
import THEME from 'constants/theme';
import styles from './Header.module.scss';

function Header() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  function handleToggleThemeBtnClick(ev) {
    ev.preventDefault();

    dispatch(changeTheme(theme === THEME.default ? THEME.dark : THEME.default));
  }

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        <Logo />
        Questionnaire
      </Link>
      <div className={styles.controls}>
        <QuestionnaireNavLinks />
        <button
          type="button"
          className={cx(styles.toggleThemeBtn, {[styles.toggleThemeBtnActive]: theme === THEME.dark})}
          onClick={handleToggleThemeBtnClick}
        />
        <QuestionnaireResetBtn />
      </div>
    </div>
  );
}

export default Header;
