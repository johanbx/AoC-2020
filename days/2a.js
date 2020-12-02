const list = process.env.PUZZLE.split("\n");

const answer = () => {
  return list.reduce((acc, curr) => {
    const [range, letter, pass] = curr.split(" ");
    const [min, max] = range.split("-").map(Number);
    const occurences = pass
      .split("")
      .reduce(
        (acc2, curr2) => (acc2 += curr2 === letter.slice(0, -1) ? 1 : 0),
        0
      );
    return (acc += occurences >= min && occurences <= max ? 1 : 0);
  }, 0);
};

console.log(answer());
