export const getScoreByNumberOfPosition = (string, stringToCheck, type) => {
  let split = string.split(' ').filter((i) => i !== '');
  let score = 0;
  //keyword score
  for (let i = 0; i < split.length; i++) {
    let position = stringToCheck.search(split[i]);
    if (position >= 0) score += 1;
  }
  //key phrase score
  let str = '';
  for (let i = 0; i < split.length - 1; i++) {
    str = split[i];
    for (let j = i + 1; j < split.length; j++) {
      str += ' ' + split[j];
      let position = stringToCheck.search(str);
      if (position >= 0) {
        score += j - i;
      }
    }
  }
  if (type === 'number') return score;
  else {
    if (score === 0) {
      return false;
    }
    return true;
  }
};
export function ConvertViToEn(str, toUpperCase = false) {
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/[\\/:*?"<>|]/g);
  str = str.replace(/[\\/:*+"<>|]/g);
  str = str.replace(/[\\/:*\"<>|]/g);

  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // Â, Ê, Ă, Ơ, Ư
  str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return toUpperCase ? str.toUpperCase() : str;
}
export const checkIfCIsInD = (string, stringToCheck) => {
  let split = stringToCheck.split('').filter((i) => i !== ''); //  [c, a, t, g, o, i, n, h, u, o,m]
  const map = new Map(split.map((i) => [i, 1]));
  split = string.split('').filter((i) => i !== ''); // ['cat', nhuom']
  let result = true;
  for (let i of split) {
    if (!map.has(i)) {
      return false;
    }
  }
  return result;
};
export const debouncee = (func, delay) => {
  let timeout;
  return (...args) => {
    if (timeout) clearTimeout(timeout);
    setTimeout(() => {
      func(...args);
      timeout = null;
    }, delay);
  };
};

export function local(arrs, forange) {
  if (!localStorage.getItem('searchHistory')) {
    localStorage.setItem('searchHistory', JSON.stringify([arrs]));
  } else {
    const dataHis = JSON.parse(localStorage?.getItem('searchHistory')) || [];
    let index_cua_phan_tu_bi_lap = dataHis.findIndex((i) => i === arrs);
    const arr = [...dataHis, arrs].filter(
      (i, index) => index !== index_cua_phan_tu_bi_lap
    );
    if (arr.length > 8) arr.shift();
    localStorage.setItem('searchHistory', JSON.stringify(arr));
  }
}
