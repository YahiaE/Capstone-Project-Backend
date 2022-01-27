const Sequelize = require('sequelize')
const db = require('./connection')

const Recipe = db.define('recipe', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  level_of_diff: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  time: {
    type: Sequelize.STRING,
    allowNull: false
  },
  steps: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Recipe