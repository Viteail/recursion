const mergeSort = (arr) => {
  if (arr.length === 1) return arr;

  let left = mergeSort(arr.slice(0, Math.round(arr.length / 2)));
  let right = mergeSort(arr.slice(Math.round(arr.length / 2)));

  let merge = [...left, ...right];
  return merge.sort((a, b) => a - b);
};

console.log(mergeSort([5, 2, 3, 6, 1]));
