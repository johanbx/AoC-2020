const list = process.env.PUZZLE.split("\n");

const answer = () => {
  const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];
  return slopes.reduce((acc, curr) => {
    const [right, down] = curr;
    let trees = 0;
    for (let y = down; y < list.length; y += down) {
      if (list[y][((y / down) * right) % list[0].length] === "#") {
        trees += 1;
      }
    }
    return acc * trees;
  }, 1);
};

console.log(answer());
