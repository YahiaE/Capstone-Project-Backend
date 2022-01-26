const db = require('./connection')
const Recipe = require('./recipe')
const RecipeItems = require('./recipe_items')

// associations

Recipe.hasMany(RecipeItems, {allowNull:false, foreignKey: 'recipe_id'})

module.exports = {
  db,
  Recipe,
  RecipeItems
}