const mongoose = require('mongoose')
const PlayerSchema = require('./players')
const TeamSchema = require('./teams')

const Player = mongoose.model('Player', PlayerSchema)
const Team = mongoose.model('Team', TeamSchema)

module.export = {
  Player,
  Team
}
