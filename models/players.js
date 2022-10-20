const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Players = new Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  yearsPlayed: { type: String, required: true },
  college: { type: String, required: true },
  awards: [{ type: String, required: true }],
  position: { type: String, required: true },
  proFootballRef: { type: String, required: true }
})

module.exports = mongoose.model('Player', Players)
