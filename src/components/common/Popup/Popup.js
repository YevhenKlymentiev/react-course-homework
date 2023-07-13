import { useRef } from 'react';
import { createPortal } from 'react-dom';

import { ReactComponent as CloseIcon } from 'assets/images/close.svg';
import styles from './Popup.module.scss';

function Popup(props) {
  const {
    children,
    close
  } = props;

  const popupPlaceholderRef = useRef(document.getElementById('popupPlaceholder'));
  const elem = (
    <div className={styles.container}>
      <div className={styles.content}>
        { children }
        <CloseIcon className={styles.closeIcon} onClick={close} />
      </div>
    </div>
  );

  return createPortal(elem, popupPlaceholderRef.current);
}

export default Popup;
