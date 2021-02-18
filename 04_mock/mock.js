function map(arr, cb) {
  const res = []
  for (let i of arr) {
    res.push(cb(i))
  }
  return res
}

module.exports = { map }