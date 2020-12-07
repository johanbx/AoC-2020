const list = process.env.PUZZLE.split("\n\n");

module.exports = () =>
  list.reduce(
    (acc, curr) =>
      (acc +=
        curr
          .replaceAll("\n", " ")
          .split(" ")
          .map((o) => o.split(":").shift())
          .sort()
          .join("")
          .replace("cid", "") === "byrecleyrhclhgtiyrpid"
          ? 1
          : 0),
    0
  );
