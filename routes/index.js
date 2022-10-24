const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This works!'))

router.post('/players', controllers.createPlayer)

router.get('/players', controllers.getAllPlayers)

router.get('/players/:id', controllers.getPlayerById)

router.get('/teams', controllers.getAllTeams)

router.get('/teams/:id', controllers.getTeamById)

module.exports = router
