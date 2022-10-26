const { Schema, model } = require('mongoose')

const Player = new Schema(
  {
    image: { type: String, required: true },
    team_id: { type: String, required: true },
    name: { type: String, required: true },
    position: { type: String, required: true },
    yearsPlayed: { type: String, required: true },
    college: { type: String, required: true },
    proBowls: { type: Number, required: true },
    superBowls: { type: Number, required: true },
    mVP: { type: Number, required: true },
    proFootballRef: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = model('Player', Player)
