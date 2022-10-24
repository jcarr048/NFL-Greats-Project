const Player = require('../models/players')
const Team = require('../models/teams')

const createPlayer = async (req, res) => {
  try {
    const player = await new Player(req.body)
    await player.save()
    return res.status(201).json({
      player
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find()
    return res.status(200).json({ teams })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find()
    return res.status(200).json({ players })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPlayerById = async (req, res) => {
  try {
    const { id } = req.params
    const player = await Player.findById(id)
    if (player) {
      return res.status(200).json({ player })
    }
    return res.status(404).send('Player with specific ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getTeamById = async (req, res) => {
  try {
    const { id } = req.params
    const team = await Team.findById(id)
    if (team) {
      return res.status(200).json({ team })
    }
    return res.status(404).send('Team with specific ID cannot be found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updatePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(player)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateTeam = async (req, res) => {
  try {
    const team = await Team.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(team)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deletePlayer = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Player.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Player Deleted')
    }
    throw new Error('Player not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createPlayer,
  getAllPlayers,
  getPlayerById,
  getAllTeams,
  getTeamById,
  updatePlayer,
  updateTeam,
  deletePlayer
}
