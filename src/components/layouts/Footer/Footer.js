import { Suspense, lazy, useState } from 'react';

import Popup from 'components/common/Popup/Popup';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import styles from './Footer.module.scss';

const Gallery = lazy(() => import('components/features/Gallery/Gallery'));

function Footer() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  function togglePopupVisibility(ev) {
    if (ev) ev.preventDefault();

    setIsPopupVisible(prevState => !prevState);
  }

  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      2023 React Course
      <button type="button" className={styles.openGalleryBtn} onClick={togglePopupVisibility}>
        View the Entire Questionnaire
      </button>
      { isPopupVisible &&
        <Popup close={togglePopupVisibility}>
          <Suspense fallback={<div>Loading ...</div>}>
            <Gallery />
          </Suspense>
        </Popup>
      }
    </div>
  );
}

export default Footer;
