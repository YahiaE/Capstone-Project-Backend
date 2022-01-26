const db = require('./connection')
const Recipe = require('./recipe')
const RecipeItems = require('./recipe_items')

// associations

Recipe.hasMany(RecipeItems);
RecipeItems.belongsTo(Recipe);

module.exports = {
  db,
  Recipe,
  RecipeItems
}