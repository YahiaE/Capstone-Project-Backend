const router = require('express').Router()
const RecipeItems = require('../db/recipe_items')



router.get('/list/:recipeId', async (req, res) => { // Get all recipe items of specific recipe through id
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

router.get('/', async(req, res) => { // Get all recipe items
    try {
      const recipe_item = await RecipeItems.findAll();
      res.send(recipe_item)
    } catch (error) {
      res.send(error.message)
    }
}) 

router.post('/addIngredients', async(req, res) => { // Post a recipe item
    try {
      const newRecipeItem = await RecipeItems.create(req.body)
      res.json(newRecipeItem)
    } catch (error) {
      res.send(error.message)
    }
})

module.exports = router;