const timeCount = 3000;

export const autoCount = (max, time, plus, functionCount) => {
  const timeInterval = timeCount / max;
  const intervalOne = setInterval(
    () => {
      functionCount((prev) => {
        if (prev < max) {
          if (max > timeCount / 10) {
            return prev + 10;
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
    max > timeCount / 10 ? timeInterval * 10 : timeInterval
  );
  return () => clearInterval(intervalOne);
};
