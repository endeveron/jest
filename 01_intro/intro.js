const expect = value => ({
  toBe: exp => {
    if (value === exp) console.log('[ PASS ]')
    else (console.log('[ FAIL ]'))
  }
})

const sum = (a, b) => a + b
const nativeNull = () => null

// expect(sum(2, 5)).toBe(7)

module.exports = { sum, nativeNull }