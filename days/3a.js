const list = process.env.PUZZLE.split("\n");

module.exports = () => {
  let trees = 0;
  for (let y = 1; y < list.length; y += 1) {
    if (list[y][(y * 3) % list[0].length] === "#") {
      trees += 1;
    }
  }
  return trees;
};
