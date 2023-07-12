import ERROR_STATUS from 'constants/errorStatus';

function fakeFetchData(data) {
  return new Promise((resolve, reject) => {
    const randomNum = Math.random();

    if (randomNum < 0.4) reject({ status: ERROR_STATUS.unknown });

    setTimeout(() => {
      resolve(data);
    }, 2_000)
  });
}

export default fakeFetchData;
