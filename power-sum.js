/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const powerSum = (x, n, curr_num = 1, curr_sum = 0) => {
  let result = 0;
  let p = Math.pow(curr_num, n);
  while (p + curr_sum < x) {
    result += powerSum(x, n, curr_num + 1, p + curr_sum);
    curr_num++;
    p = Math.pow(curr_num, n);
  }
  if (p + curr_sum === x) {
    result++;
  }
  return result;
};

module.exports = powerSum;
