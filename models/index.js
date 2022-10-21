const mongoose = require('mongoose')
const PlayerSchema = require('./player')
const TeamSchema = require('./teams')

const Player = mongoose.model('Player', PlayerSchema)
const Team = mongoose.model('Team', TeamSchema)

module.export = {
  Player,
  Team
}
