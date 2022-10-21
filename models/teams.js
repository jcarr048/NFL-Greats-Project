const { Schema } = require('mongoose')

const Teams = new Schema(
  {
    logo: { type: String, required: true },
    name: { type: String, required: true },
    yearFounded: { type: String, required: true },
    superBowls: { type: Number, required: true },
    bestPlayer: { type: Schema.Players.objectId, required: true }
  },
  { timestamps: true }
)

module.exports = Teams
