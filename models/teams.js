const { Schema, model } = require('mongoose')

const Team = new Schema(
  {
    logo: { type: String, required: true },
    name: { type: String, required: true },
    yearFounded: { type: String, required: true },
    superBowls: { type: Number, required: true },
    bestPlayer: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = model('Team', Team)
