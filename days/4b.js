const list = process.env.PUZZLE.split("\n\n").map((o) =>
  o.replaceAll("\n", " ").split(" ")
);

module.exports = () =>
  list.reduce((valids, passport) => {
    let valid = true;
    if (passport.length > 6) {
      let fields = [];
      for (let i = 0; i < passport.length; i += 1) {
        const [key, value] = passport[i].split(":");
        switch (key) {
          case "byr":
          case "iyr":
          case "eyr":
          case "hgt":
          case "pid":
            const number = parseInt(value);
            if (isNaN(number)) {
              valid = false;
            } else {
              valid =
                (key === "byr" && number >= 1920 && number <= 2002) ||
                (key === "iyr" && number >= 2010 && number <= 2020) ||
                (key === "eyr" && number >= 2020 && number <= 2030) ||
                (key === "hgt" &&
                  value.slice(-2) === "cm" &&
                  number >= 150 &&
                  number <= 193) ||
                (key === "hgt" &&
                  value.slice(-2) === "in" &&
                  number >= 59 &&
                  number <= 76) ||
                (key === "pid" && value.length === 9);
            }
            break;
          case "hcl":
            valid = value.match(/\#[a-f0-9]{6}/) !== null;
            break;
          case "ecl":
            valid =
              value === "amb" ||
              value === "blu" ||
              value === "brn" ||
              value === "gry" ||
              value === "grn" ||
              value === "hzl" ||
              value === "oth";
            break;
          case "cid":
            break;
          default:
            valid = false;
        }
        if (!valid) {
          break;
        }
        if (key !== "cid") {
          fields.push(key);
        }
      }
      valid = fields.sort().join("") === "byrecleyrhclhgtiyrpid";
    } else {
      valid = false;
    }
    return valid ? valids + 1 : valids;
  }, 0);
