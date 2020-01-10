const add = function(...numbers) {
  return numbers.reduce((acc, cur) => {
    return acc + cur;
  });
};

const math = {
  add: add
};

module.exports = math;
