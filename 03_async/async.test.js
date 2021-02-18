const axios = require('axios')
const Ajax = require('./async')

jest.mock('axios')

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

describe('Axios: GET', () => {
  let res, todos

  beforeEach(() => {
    todos = [{
      id: 1,
      title: 'ToDo 1',
      completed: false
    }]

    res = {
      data: {
        todos
      }
    }
  })

  test('should return data from backend', () => {
    axios.get.mockReturnValue(res)

    return Ajax.get().then(data => {
      expect(data.todos).toEqual(todos)
    })
  })

})