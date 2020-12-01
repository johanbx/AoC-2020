const list = process.env.PUZZLE.split('\n')

const answer = () => {
  for (let i = 0; i < list.length; i += 1) {
    for (let k = i; k < list.length; k += 1) {
      for (let l = k; l < list.length; l += 1) {
        const [a, b, c] = [parseInt(list[i]), parseInt(list[k]), parseInt(list[l])]
        if (a + b + c === 2020) {
          return a * b * c
        }
      }
    }
  }
}

console.log(answer())
