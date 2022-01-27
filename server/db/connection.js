require('dotenv').config();
const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${pkg.name}`,
  {
    logging: false
  }
)
module.exports = db

db.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
