import { Component } from 'react';

import Error from 'components/common/Error/Error';
import Loader from 'components/common/Loader/Loader';
import Question from './Question/Question';
import fakeFetchData from 'helpers/client';
import data from './data.mock';

class Questionnaire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      question: null,
      isLoading: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ isLoading: true });

    fakeFetchData(data)
      .then(res => {
        this.setState({ question: res, isLoading: false });
      })
      .catch(err => {
        this.setState({ error: err, isLoading: false });
      });
  }

  render() {
    const {
      error,
      question,
      isLoading
    } = this.state;

    if (error) return <Error errorStatus={error.status} />;
    if (isLoading || !question) return <Loader />;

    return <Question data={question} />;
  }
}

export default Questionnaire;
