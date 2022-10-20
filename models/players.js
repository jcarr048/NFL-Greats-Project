const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Players = new Schema(
  {
    image: { type: String, required: true },
    team: { type: Schema.Teams.Object.Id, ref: 'Team' },
    name: { type: String, required: true },
    yearsPlayed: { type: String, required: true },
    college: { type: String, required: true },
    awards: { type: Array, required: true },
    position: { type: String, required: true },
    proFootballRef: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Player', Players)
