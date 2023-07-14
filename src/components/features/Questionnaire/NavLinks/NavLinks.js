import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import styles from './NavLinks.module.scss';

function NavLinks() {
  const questions = useSelector(state => state.questionnaire.questions);

  if (!questions) return null;

  return questions.map(curr =>
    <NavLink key={curr.id}
             to={`/questionnaire/${curr.id}`}
             className={({ isActive }) =>
               cx(styles.navLink, {[styles.navLinkActive]: isActive})
             }
    >
      { curr.linkText }
    </NavLink>
  );
}

export default NavLinks;
