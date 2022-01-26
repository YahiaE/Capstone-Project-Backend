const Sequelize = require('sequelize')
const db = require('./connection')
const Recipe = require('../db/recipe')

const RecipeItems = db.define('recipe_items', {
  ingredient: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
  // Must add foreign key called RecipeId
})

module.exports = RecipeItems