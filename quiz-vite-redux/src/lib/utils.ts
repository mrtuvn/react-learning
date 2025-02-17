/*
time: 45
output: 0:45
*/

export const formatTimer = (time: number) => {
  const minutes = Math.floor(time / 60);
  const second = time % 60;
  return `${minutes}:${second < 10 ? "0" : ""}${second}`;
};

export const getDatetimeToString = (name: string) => {
  const date = new Date();
  const getDay = `0${date.getDate()}`.slice(-2).toString();
  const getMonth = `0${date.getMonth() + 1}`.slice(-2).toString();
  const getYear = date.getFullYear().toString();
  const getHours = `0${date.getHours()}`.slice(-2).toString();
  const getMinutes = `0${date.getMinutes()}`.slice(-2).toString();
  const getSeconds = `0${date.getSeconds()}`.slice(-2).toString();
  return `${name}_${getYear}-${getMonth}-${getDay} ${getHours}${getMinutes}${getSeconds}`;
};
