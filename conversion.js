const sessionCount = 27000
const percent = 2.63

// а какая погрешность?
function generateExperiment(sessionCount, percent) {
  let sum = 0

  for (let i = 0; i < sessionCount; i++) {
    if (Math.random() < (percent / 100)) sum += 1
  }

  return sum
}

function compare() {
  const r1 = Number(generateExperiment(sessionCount, percent) / sessionCount * 100).toFixed(2)
  const r2 = Number(generateExperiment(sessionCount, percent) / sessionCount * 100).toFixed(2)
  const delta = Math.abs(Number((r1 / r2 - 1) * 100).toFixed(2))

  return {r1, r2, delta}
}

// const {r1, r2, delta} = compare()
// console.log(`r1: ${r1}`)
// console.log(`r2: ${r2}`)
// console.log('delta', delta)





// а какой разброс погрешностей?
const replays = 10000
const results = []

for (let i = 0; i < replays; i ++ ) {
  const {delta} = compare()
  results.push(delta)
}

const min = Math.min(...results)
const max = Math.max(...results)
const aver = Number(results.reduce((acc, value) => acc + Math.abs(Number(value)), 0) / replays).toFixed(2)


console.log('minDelta', min)
console.log('maxDelta', max)
console.log('aver', aver)


const hp = Math.hypot(...results)
const sqAver = Math.sqrt(hp * hp / replays)

console.log('sqAver', sqAver)


