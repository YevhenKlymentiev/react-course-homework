function getDataWithQuestionResult(data, questionResult) {
  const questionIndex = data.findIndex(curr => curr.id === questionResult.id);
  const updatedQuestionWithResult = {
    ...data[questionIndex],
    resultStatus: questionResult.resultStatus,
    selectedAnswer: questionResult.selectedAnswer
  };

  const updatedData = [...data];
  updatedData[questionIndex] = updatedQuestionWithResult;

  return updatedData;
}

export default getDataWithQuestionResult;
