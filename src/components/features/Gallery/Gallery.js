import reduxSyncFlowImg from 'assets/images/redux-sync-flow.png';
import reduxAsyncFlowImg from 'assets/images/redux-async-flow.png';
import styles from './Gallery.module.scss';

function Gallery() {
  return (
    <div className={styles.container}>
      <img src={reduxSyncFlowImg} alt="Redux Sync Flow" />
      <img src={reduxAsyncFlowImg} alt="Redux Async Flow" />
      <img src={reduxSyncFlowImg} alt="Redux Sync Flow" />
      <img src={reduxAsyncFlowImg} alt="Redux Async Flow" />
    </div>
  );
}

export default Gallery;
