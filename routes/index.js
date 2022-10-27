const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.post('/players/new', controllers.createPlayer)

router.get('/players', controllers.getAllPlayers)

router.get('/players/:id', controllers.getPlayerById)

router.get('/teams', controllers.getAllTeams)

router.get('/teams/:id', controllers.getTeamById)

router.put('/update/players/:id', controllers.updatePlayer)

router.put('/teams/update', controllers.updateTeam)

router.delete('/delete/players/:id', controllers.deletePlayer)

module.exports = router
