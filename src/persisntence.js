import { Low } from 'lowdb'

const userDataPath = require('electron').remote.getCurrentWindow().userDataPath

const db = new Low(userDataPath)

module.exports = {
  db
}
