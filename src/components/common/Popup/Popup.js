import { ReactComponent as CloseIcon } from 'assets/images/close.svg';
import styles from './Popup.module.scss';

function Popup(props) {
  const {
    children,
    close
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        { children }
        <CloseIcon className={styles.closeIcon} onClick={close} />
      </div>
    </div>
  );
}

export default Popup;
