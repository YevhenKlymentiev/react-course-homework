import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/layouts/Header/Header';
import Footer from 'components/layouts/Footer/Footer';
import QuestionnaireDataProvider from 'components/features/Questionnaire/DataProvider/DataProvider';
import DarkThemeContext from 'contexts/darkTheme';
import styles from './App.module.scss';

function App() {
  const [isDarkThemeActive, setIsDarkThemeActive] = useState(false);

  function toggleDarkTheme() {
    setIsDarkThemeActive(prevState => !prevState);
  }

  return (
    <DarkThemeContext.Provider value={isDarkThemeActive}>
      <QuestionnaireDataProvider>
        <div className={styles.container}>
          <Header isDarkThemeActive={isDarkThemeActive} toggleDarkTheme={toggleDarkTheme} />
          <div className={styles.content}>
            <Outlet />
          </div>
          <Footer />
        </div>
      </QuestionnaireDataProvider>
    </DarkThemeContext.Provider>
  );
}

export default App;
