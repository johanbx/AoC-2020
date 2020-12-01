process.env.PUZZLE = require('fs').readFileSync('./inputs/'+process.argv[3])
const start = process.hrtime()
require('./days/'+process.argv[2])
const hrend = process.hrtime(start);
console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)