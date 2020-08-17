import {Storage} from 'aws-amplify';

export const KeyToUri = key => {
  return new Promise((resolve, reject) => {
    Storage.get(key, {level: 'public'})
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const KeyToData = Key =>{
  return new Promise((resolve,reject)=>{
  })
}

export const postTime = time => {
  const now = new Date();
  const timeGiven = new Date(time);
  const yearDifference = now.getFullYear() - timeGiven.getFullYear();
  const MonthDifference = now.getMonth() - timeGiven.getMonth();
  const DateDifference = now.getDate() - timeGiven.getDate();

  if (yearDifference) {
    return `${yearDifference} years ago`;
  } else if (MonthDifference) {
    return `${MonthDifference} months ago`;
  } else if (DateDifference) {
    return `${DateDifference} days ago`;
  } else {
    return 'now';
  }
};