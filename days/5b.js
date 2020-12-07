const list = process.env.PUZZLE.split("\n");

module.exports = () => {
  const seatIds = list.reduce((acc, curr) => {
    let [lower, upper] = [0, 127];
    let [row, column] = [0, 0];
    for (let i = 0; i < 7; i += 1) {
      if (curr[i] === "B") {
        lower += (((upper - lower) / 2) | 0) + 1;
      } else if (curr[i] === "F") {
        upper -= (((upper - lower) / 2) | 0) + 1;
      }
    }
    row = lower;

    [lower, upper] = [0, 7];
    for (let i = 7; i < 10; i += 1) {
      if (curr[i] === "R") {
        lower += (((upper - lower) / 2) | 0) + 1;
      } else if (curr[i] === "L") {
        upper -= (((upper - lower) / 2) | 0) + 1;
      }
    }
    column = upper;

    const seatId = row * 8 + column;
    acc.push(seatId);
    return acc;
  }, []);

  const sortedSeats = seatIds.sort((a, b) => (a > b ? 1 : -1));
  for (let i = 0; i < sortedSeats.length; i += 1) {
    if (sortedSeats[i] + 1 !== sortedSeats[i + 1]) {
      return sortedSeats[i] + 1;
    }
  }
};
