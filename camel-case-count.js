/**
 * @param {string} s
 * @return {number}
 */
const camelCaseCount = (s = '') => {
  let count = 1;
  if (s.length <= 2 <= 100000 && isNaN(Number(s))) {
    for (let i in s) {
      if (s.charAt(i) === s.charAt(i).toUpperCase()) {
        count++;
      }
    }
    return count;
  }
  return 'invalid input';
};

module.exports = camelCaseCount;
