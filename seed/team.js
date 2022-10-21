const db = require('../db')
const Team = require('../models/teams.js')
console.log(Team)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const teams = [
    {
      logo: 'https://cdn.ssref.net/req/202210123/tlogo/pfr/atl.png',
      name: 'Atlanta Falcons',
      yearFounded: 1966,
      superBowls: 0,
      bestPlayer: 'Matt Ryan',
      teamWebsite: 'https://www.atlantafalcons.com/'
    },
    {
      logo: 'https://cdn.ssref.net/req/202210123/tlogo/pfr/nor.png',
      name: 'New Orleans Saints',
      yearFounded: 1967,
      superBowls: 1,
      bestPlayer: 'Drew Brees',
      teamWebsite: 'https://www.neworleanssaints.com/'
    },
    {
      logo: 'https://cdn.ssref.net/req/202210123/tlogo/pfr/car.png',
      name: 'Carolina Panthers',
      yearFounded: 1995,
      superBowls: 0,
      bestPlayer: 'Cam Newton',
      teamWebsite: 'https://www.panthers.com/'
    },
    {
      logo: 'https://cdn.ssref.net/req/202210123/tlogo/pfr/tam.png',
      name: 'Tampa Bay Buccaneers',
      yearFounded: 1976,
      superBowls: 2,
      bestPlayer: 'Derrick Brooks',
      teamWebsite: 'https://www.buccaneers.com/'
    }
  ]
  await Team.insertMany(teams)
  console.log('Created Teams')
}
const run = async () => {
  await main()
  db.close()
}

run()
