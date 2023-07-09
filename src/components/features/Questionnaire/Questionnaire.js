import { Component } from 'react';

import data from './data.mock';
import styles from './Questionnaire.module.scss';

class Questionnaire extends Component {
  constructor(props) {
    super(props);

    this.state = { isAnswerBtnsDisabled: false };
  }

  componentDidMount() {
    this.answerBttnsDisableTimeoutId = setTimeout(() => {
      this.setState({ isAnswerBtnsDisabled: true });
    }, 10_000);
  }

  componentWillUnmount() {
    clearTimeout(this.answerBttnsDisableTimeoutId);
  }

  render() {
    const {
      isAnswerBtnsDisabled
    } = this.state;

    return (
      <div>
        <h1 className={styles.question}>{ data.questionText }</h1>
        <div className={styles.answers}>
          <button type="button" className={styles.answerBtn} disabled={isAnswerBtnsDisabled}>
            { data.firstAnswerText }
          </button>
          <button type="button" className={styles.answerBtn} disabled={isAnswerBtnsDisabled}>
            { data.secondAnswerText }
          </button>
        </div>
      </div>
    );
  }
}

export default Questionnaire;
