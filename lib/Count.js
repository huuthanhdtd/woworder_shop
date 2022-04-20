export const autoCount = (max, time, plus, functionCount) => {
  const intervalOne = setInterval(() => {
    functionCount((prev) => {
      if (prev < max) {
        return prev + plus;
      }
      if (prev >= max) {
        clearInterval(intervalOne);
        return max;
      }
    });
  }, time);
  return () => clearInterval(intervalOne);
};
