import { createPortal } from 'react-dom';

import { ReactComponent as CloseIcon } from 'assets/images/close.svg';
import styles from './Popup.module.scss';

function Popup(props) {
  const {
    children,
    close
  } = props;

  const popupPlaceholder = document.getElementById('popupPlaceholder');
  const elem = (
    <div className={styles.container}>
      <div className={styles.content}>
        { children }
        <CloseIcon className={styles.closeIcon} onClick={close} />
      </div>
    </div>
  );

  return createPortal(elem, popupPlaceholder);
}

export default Popup;
