import { Component } from 'react';

import Header from 'components/layouts/Header/Header';
import Footer from 'components/layouts/Footer/Footer';
import Questionnaire from 'components/features/Questionnaire/Questionnaire';
import DarkThemeContext from 'contexts/darkTheme';
import styles from './App.module.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDarkThemeActive: false,
      questionnaireResetIndicator: 0
    };
  }

  toggleDarkTheme = () => {
    this.setState(prevState => ({ isDarkThemeActive: !prevState.isDarkThemeActive }));
  }

  resetQuestionnaire = () => {
    this.setState(prevState => ({ questionnaireResetIndicator: prevState.questionnaireResetIndicator + 1 }));
  }

  render() {
    const {
      isDarkThemeActive,
      questionnaireResetIndicator
    } = this.state;

    return (
      <DarkThemeContext.Provider value={isDarkThemeActive}>
        <div className={styles.container}>
          <Header resetQuestionnaire={this.resetQuestionnaire}
                  isDarkThemeActive={isDarkThemeActive}
                  toggleDarkTheme={this.toggleDarkTheme}
          />
          <div className={styles.content}>
            <Questionnaire resetIndicator={questionnaireResetIndicator} />
          </div>
          <Footer />
        </div>
      </DarkThemeContext.Provider>
    );
  }
}

export default App;
