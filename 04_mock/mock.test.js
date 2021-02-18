const { map } = require('./mock')

describe('Map function:', () => {
  let arr, fn

  beforeEach(() => {
    arr = [1, 2, 3, 5]
    fn = jest.fn(a => a ** 2)
    map(arr, fn)
  })

  test('should call callback', () => {
    expect(fn).toBeCalled()
  })

  test('should call callback 4 times', () => {
    expect(fn).toBeCalledTimes(4)
    expect(fn.mock.calls.length).toBe(4)
  })

  test('should pow 2 each element', () => {
    expect(fn.mock.results[0].value).toBe(1)
    expect(fn.mock.results[1].value).toBe(4)
    expect(fn.mock.results[2].value).toBe(9)
    expect(fn.mock.results[3].value).toBe(25)
  })

})