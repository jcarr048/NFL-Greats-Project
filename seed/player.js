const db = require('')
const { Team, Player } = require('')

const main = async () => {
  const saints = await Team.find({ name: 'New Orleans Saints'})
  const falcons = await Team.find({ name: 'Atlanta Falcons'})
  const panthers = await Team.find({ name: 'Carolina Panthers'})
  const buccaneers = await Team.find({ name: 'Tampa Bay Buccaneers'})

  const player = [
  {
   image: 'https://www.pro-football-reference.com/req/20180910/images/headshots/BreeDr00_2020.jpg',
   team: '',
   name: 'Drew Brees',
   position: 'Quarterback',
   yearsPlayed: 2001-2020,
   college: 'Purdue',
   proBowls: 13, 
   superBowls: 1, 
   mVP: 0,
   proFootballRef: 'https://www.pro-football-reference.com/players/B/BreeDr00.htm'
  },
  {
   image:'https://www.pro-football-reference.com/req/20180910/images/headshots/BrooDe00_2019.jpg',
   team: '',
   name: 'Derrick Brooks',
   position:'Linebacker', 
   yearsPlayed: 1995-2008,
   college: 'Florida State',
   proBowls: 11,
   superBowls: 1,
   defensivePoY: 1,
   proFootballRef:'https://www.pro-football-reference.com/players/B/BrooDe00.htm'
  },
  {
    image:'https://www.pro-football-reference.com/req/20180910/images/headshots/RyanMa00_2022.jpg',
    team: '',
    name: 'Matt Ryan',
    position:'Quarterback', 
    yearsPlayed: 2008-'Present',
    college: 'Boston College',
    proBowls: 4,
    superBowls: 0,
    mVP: 1,
    proFootballRef:'https://www.pro-football-reference.com/players/R/RyanMa00.htm'
   }
   {
    image:'https://www.pro-football-reference.com/req/20180910/images/headshots/NewtCa00_2021.jpg',
    team: '',
    name: 'Cam Newton',
    position:'Quarterback', 
    yearsPlayed: 2011-2021,
    college: 'Auburn',
    proBowls: 3,
    superBowls: 0,
    mVP: 1,
    proFootballRef:'https://www.pro-football-reference.com/players/N/NewtCa00.htm'
   } 
]

await Player.insertMany(players)
console.log('Created players')
}
const run = async () => {
  await main()
  db.close()
}

run()