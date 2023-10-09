const fibs = (n) => {
  let result = [];

  for (let i = 0; i < n; i++) {
    if (result.length === 0) {
      result.push(0);
      continue;
    }
    if (result.length === 1) {
      result.push(1);
      continue;
    }
    result.push(result[i - 2] + result[i - 1]);
  }
  return result;
};

const fibsRec = (n) => {
  if (n === 1) return [n];
  let arr = fibsRec(n - 1);
  if (arr.length === 1) {
    arr.unshift(0);
    return arr;
  }
  arr.push(arr[n - 3] + arr[n - 2]);
  return arr;
};

console.log(fibsRec(1));
