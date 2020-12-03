const fs = require("fs");

const run = (script, puzzle) => {
  process.env.PUZZLE = require("fs").readFileSync(
    "./inputs/" + puzzle + ".txt"
  );
  console.log(`== ${script} ==`);
  const func = require("./days/" + script);
  const start = process.hrtime();
  const res = func();
  const hrend = process.hrtime(start);
  console.log("Result:", res);
  console.log("Time: %ds %dms", hrend[0], hrend[1] / 1000000);
};

if (process.argv[2] === "all") {
  console.log();
  fs.readdirSync("./days").map((name) => {
    run(name, name.slice(0, -4));
    console.log();
  });
} else if (process.argv.length !== 4) {
  console.log(
    "USAGE node index.js [day] [input]\nEXAMPLE: node index.js 2b 2\nALL: node index.js all"
  );
} else {
  run(process.argv[2], process.argv[3]);
}
