const axios = require('axios')

class Ajax {

  static echo(data) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (data) res(data)
        else rej(new Error('Error'))
      }, 2000)
    })
  }

  static async get() {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      return res.data
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Ajax