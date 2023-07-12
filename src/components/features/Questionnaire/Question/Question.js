import { Component } from 'react';

import Answers from './Answers/Answers';
import ResultMessage from './ResultMessage/ResultMessage';
import RESULT_STATUS from 'constants/resultStatus';
import styles from './Question.module.scss';

class Question extends Component {
  constructor(props) {
    super(props);

    this.availableTimeForAnswer = 10_000;

    this.state = {
      resultStatus: null,
      selectedAnswer: null
    };
  }

  componentDidMount() {
    this.answerTimeoutId = setTimeout(() => {
      this.setState({ resultStatus: RESULT_STATUS.expired });
    }, this.availableTimeForAnswer);
  }

  componentWillUnmount() {
    clearTimeout(this.answerTimeoutId);
  }

  setSelectedAnswer = (answer) => {
    clearTimeout(this.answerTimeoutId);

    this.setState({
      selectedAnswer: answer,
      resultStatus: answer.correctness ? RESULT_STATUS.success : RESULT_STATUS.failure
    });
  }

  render() {
    const {
      data
    } = this.props;

    const {
      resultStatus,
      selectedAnswer
    } = this.state;

    return (
      <div>
        <h1 className={styles.question}>{ data.questionText }</h1>
        <Answers list={data.answers}
                 isBtnsDisabled={resultStatus}
                 selectedAnswer={selectedAnswer}
                 setSelectedAnswer={this.setSelectedAnswer}
        />
        { resultStatus &&
          <ResultMessage resultStatus={resultStatus} />
        }
      </div>
    );
  }
}

export default Question;
