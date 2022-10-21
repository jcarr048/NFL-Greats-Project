const { Schema } = require('mongoose')

const Players = new Schema(
  {
    image: { type: String, required: true },
    team: { type: Schema.Teams.objectId, ref: 'Team' },
    name: { type: String, required: true },
    position: { type: String, required: true },
    yearsPlayed: { type: String, required: true },
    college: { type: String, required: true },
    proBowls: { type: String, required: true },
    superBowls: { type: String, required: true },
    mVP: { type: String, required: true },
    proFootballRef: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Players
