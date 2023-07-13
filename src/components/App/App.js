import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/layouts/Header/Header';
import Footer from 'components/layouts/Footer/Footer';
import Welcome from 'components/features/Welcome/Welcome';
import Questionnaire from 'components/features/Questionnaire/Questionnaire';
import NotFound from 'components/features/NotFound/NotFound';
import DarkThemeContext from 'contexts/darkTheme';
import styles from './App.module.scss';

function App() {
  const [isDarkThemeActive, setIsDarkThemeActive] = useState(false);
  const [questionnaireResetIndicator, setQuestionnaireResetIndicator] = useState(0);

  function toggleDarkTheme() {
    setIsDarkThemeActive(prevState => !prevState);
  }

  function resetQuestionnaire() {
    setQuestionnaireResetIndicator(prevState => prevState + 1);
  }

  function renderRoutes () {
    return (
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/questionnaire"
               element={<Questionnaire resetIndicator={questionnaireResetIndicator} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }

  return (
    <DarkThemeContext.Provider value={isDarkThemeActive}>
      <div className={styles.container}>
        <Header resetQuestionnaire={resetQuestionnaire}
                isDarkThemeActive={isDarkThemeActive}
                toggleDarkTheme={toggleDarkTheme}
        />
        <div className={styles.content}>
          { renderRoutes() }
        </div>
        <Footer />
      </div>
    </DarkThemeContext.Provider>
  );
}

export default App;
