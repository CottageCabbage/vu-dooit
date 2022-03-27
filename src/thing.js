const { db } = require('@/persisntence.js')

export default {
  doThingPls () {
    db.data.posts.push({
      id: 1,
      title: 'asd'
    })
    db.write()
  }
}
