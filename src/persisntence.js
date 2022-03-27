const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const userDataPath = require('electron').remote.getCurrentWindow().userDataPath

const dataAdapter = new FileSync(userDataPath)
const db = low(dataAdapter)

module.exports = {
  db
}
