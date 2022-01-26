const express = require("express")
const app = express()
const PORT = 3001
const morgan = require('morgan')
const { db } = require('./db')
const cors = require('cors')

//express now has its own middleware that we had to install other libraries to take care of.
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('Index'))

app.use('/recipe', require('./api/recipe'))
app.use('/recipe_items', require('./api/recipe_items'))

db.sync().then(() => {
  console.log('Database is synced')
  app.listen(PORT, () =>
    console.log(`Listening to port ${PORT}`)
  )
})
