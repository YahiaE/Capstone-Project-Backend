const Sequelize = require('sequelize')
const db = require('./connection')

const RecipeItems = db.define('recipe_items', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
 recipe_id: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  ingredient_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = RecipeItems