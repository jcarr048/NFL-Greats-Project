const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Teams = new Schema({
  teamName: { type: String, required: true },
  yearStarted: { type: String, required: true },
  superBowls: { type: Number, required: true },
  division: { type: String, required: true },
  previousNames: { type: String, required: false },
  about: { type: String, required: true }
})

module.exports = mongoose.model('Team', Teams)
