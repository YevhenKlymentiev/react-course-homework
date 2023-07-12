import RESULT_STATUS from 'constants/resultStatus';

const MESSAGES = {
  [RESULT_STATUS.success]: 'Congratulations! You answered correctly!',
  [RESULT_STATUS.failure]: 'Unfortunately, you did not find the correct answer!',
  [RESULT_STATUS.expired]: 'The allotted time for an answer has expired!',
}

export default MESSAGES;
