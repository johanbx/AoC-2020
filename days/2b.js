const list = process.env.PUZZLE.split("\n");

const answer = () => {
  return list.reduce((acc, curr) => {
    let [range, letter, pass] = curr.split(" ");
    letter = letter.slice(0, -1);
    const [a, b] = range
      .split("-")
      .map(Number)
      .map((o) => (pass[o - 1] === letter ? 1 : 0));
    return (acc += a + b === 1 ? 1 : 0);
  }, 0);
};

console.log(answer());
