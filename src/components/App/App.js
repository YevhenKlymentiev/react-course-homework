import { Outlet } from 'react-router-dom';

import Header from 'components/layouts/Header/Header';
import Footer from 'components/layouts/Footer/Footer';
import QuestionnaireDataProvider from 'components/features/Questionnaire/DataProvider/DataProvider';
import styles from './App.module.scss';

function App() {
  return (
      <QuestionnaireDataProvider>
        <div className={styles.container}>
          <Header />
          <div className={styles.content}>
            <Outlet />
          </div>
          <Footer />
        </div>
      </QuestionnaireDataProvider>
  );
}

export default App;
