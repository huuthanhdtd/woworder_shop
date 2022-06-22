const timeCount = 3000;

function countNumber(value) {
  let i = 0;
  while (value > 100) {
    value /= 10;
    i++;
  }
  return i;
}

export const autoCount = (max, time, plus, functionCount) => {
  const timeInterval = timeCount / max;
  const numPlus = countNumber(max);
  const exponential = Math.pow(10, numPlus);
  const intervalOne = setInterval(
    () => {
      functionCount((prev) => {
        if (prev < max) {
          if (numPlus > 1) {
            return prev + exponential;
          } else {
            return prev + 1;
          }
        }
        if (prev >= max) {
          clearInterval(intervalOne);
          return max;
        }
      });
    },
    numPlus > 1 ? timeInterval * exponential : timeInterval
  );
  return () => clearInterval(intervalOne);
};
