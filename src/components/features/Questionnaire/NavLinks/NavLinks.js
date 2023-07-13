import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import DataContext from 'components/features/Questionnaire/DataProvider/data.context';
import styles from './NavLinks.module.scss';

function NavLinks() {
  const { questions } = useContext(DataContext);

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
