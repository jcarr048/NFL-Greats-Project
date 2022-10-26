const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb+srv://j3ppy:Irishrugby12@nfldatabase.6efkrgd.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db
