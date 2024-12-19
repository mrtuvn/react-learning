// trigger only end of action. After delay call excecute
const throttle = (callback, delay) => {
  let shouldWait = false;
  let lastArgs = null;

  return (...args) => {
    if (shouldWait) {
      lastArgs = e;
      return;
    }

    callback(...args);

    shouldWait = true; //block execute next schedule

    setTimeout(() => {
      if (lastArgs === null) {
        shouldWait = false;
      } else {
        shouldWait = false;
        callback(...lastArgs);
        lastArgs = null;
      }
    }, delay);
  };
};

export default throttle;
