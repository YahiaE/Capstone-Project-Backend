const router = require('express').Router()
const RecipeItems = require('../db/recipe_items')
const Recipe = require('../db/recipe')


router.get('/list/:recipeId', async (req, res) => { // Get all recipe items of specific recipe through id | http://localhost:3001/recipe_items/list/(id here)
    try {
      const recipe_items = await RecipeItems.findAll({
        where: {
          recipeId: req.params.recipeId
        }
      })
      res.send(recipe_items)
    } catch (error) {
      res.send(error.message)
    }
})

router.get('/', async(req, res) => { // Get all recipe items | http://localhost:3001/recipe_items
    try {
      const recipe_item = await RecipeItems.findAll();
      res.send(recipe_item)
    } catch (error) {
      res.send(error.message)
    }
}) 

router.post('/addIngredients', async(req, res) => { // Post a recipe item | http://localhost:3001/recipe_items and then post
    try {
      const newRecipeItem = await RecipeItems.create(req.body)
      res.json(newRecipeItem)
    } catch (error) {
      res.send(error.message)
    }
})

module.exports = router;