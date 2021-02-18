const Ajax = require('./async')

describe('Ajax: echo', () => {

  test('should return value with async', async () => {
    const res = await Ajax.echo('data')
    expect(res).toBe('data')
  })

  test('should catch error via async', async () => {
    try {
      await Ajax.echo()
    } catch (e) {
      expect(e.message).toBe('Error')
    }
  })

  test('should catch error via promise', () => {
    Ajax.echo().catch(err => {
      expect(err.toBeInstanceOf(Error))
    })
  })
})