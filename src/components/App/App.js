import Header from 'components/layouts/Header/Header';
import Footer from 'components/layouts/Footer/Footer';
import Questionnaire from 'components/features/Questionnaire/Questionnaire';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Questionnaire />
      </div>
      <Footer />
    </div>
  );
}

export default App;
