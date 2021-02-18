const Lodash = require('./sync')
let _ = new Lodash()

describe('Lodash: compact', () => {

  let arr

  beforeEach(() => {
    arr = [0, 42, false, '', 'abc', true, null]
  })

  test('should be defined', () => {
    expect(_.compact).toBeDefined()
    expect(_.compact).not.toBeUndefined()
  })

  test('should remove falsy values from array', () => {
    const res = [42, 'abc', true]
    expect(_.compact(arr)).toEqual(res)
  })

  test('should NOT contain falsy values', () => {
    expect(_.compact(arr)).not.toContain(false)
    expect(_.compact(arr)).not.toContain('')
    expect(_.compact(arr)).not.toContain(0)
    expect(_.compact(arr)).not.toContain(null)
  })
})

describe('Lodash: groupBy', () => {
  test('should be defined', () => {
    expect(_.groupBy).toBeDefined()
    expect(_.groupBy).not.toBeUndefined()
  })

  test('should group array items by Math.floor', () => {
    const arr = [2.2, 2.4, 4.2, 3.1]
    const res = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1],
    }
    expect(_.groupBy(arr, Math.floor)).toEqual(res)
  })

  test('should group array items by length', () => {
    const arr = ['one', 'two', 'three']
    res = {
      3: ['one', 'two'],
      5: ['three'],
    }
    expect(_.groupBy(arr, 'length')).toEqual(res)
  })

  test('should NOT return an array', () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
  })
})