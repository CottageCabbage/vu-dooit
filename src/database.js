// eslint-disable-next-line no-unused-vars
import fs from 'fs'
const low = require('lowdb')

const FileSync = require('lowdb/adapters/FileSync')

const userDataPath = require('electron').remote.getCurrentWindow().userDataPath

const dataAdapter = new FileSync(userDataPath)

const db = low(dataAdapter)
db.write(['hi'])

module.exports = {
  db
}
