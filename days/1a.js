const list = process.env.PUZZLE.split("\n");

module.exports = () => {
  for (let i = 0; i < list.length; i += 1) {
    for (let k = i; k < list.length; k += 1) {
      const [a, b] = [parseInt(list[i]), parseInt(list[k])];
      if (a + b === 2020) {
        return a * b;
      }
    }
  }
};
