import { useState } from 'react';

import Header from 'components/layouts/Header/Header';
import Footer from 'components/layouts/Footer/Footer';
import Questionnaire from 'components/features/Questionnaire/Questionnaire';
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

  return (
    <DarkThemeContext.Provider value={isDarkThemeActive}>
      <div className={styles.container}>
        <Header resetQuestionnaire={resetQuestionnaire}
                isDarkThemeActive={isDarkThemeActive}
                toggleDarkTheme={toggleDarkTheme}
        />
        <div className={styles.content}>
          <Questionnaire resetIndicator={questionnaireResetIndicator} />
        </div>
        <Footer />
      </div>
    </DarkThemeContext.Provider>
  );
}

export default App;
