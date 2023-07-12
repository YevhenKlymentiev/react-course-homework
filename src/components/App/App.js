import { Component } from 'react';

import Header from 'components/layouts/Header/Header';
import Footer from 'components/layouts/Footer/Footer';
import Questionnaire from 'components/features/Questionnaire/Questionnaire';
import styles from './App.module.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionnaireResetIndicator: 0
    };
  }

  resetQuestionnaire = () => {
    this.setState(prevState => ({ questionnaireResetIndicator: prevState.questionnaireResetIndicator + 1 }));
  }

  render() {
    const {
      questionnaireResetIndicator
    } = this.state;

    return (
      <div className={styles.container}>
        <Header resetQuestionnaire={this.resetQuestionnaire} />
        <div className={styles.content}>
          <Questionnaire resetIndicator={questionnaireResetIndicator} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
