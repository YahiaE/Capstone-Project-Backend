const router = require('express').Router()
const RecipeItems = require('../db/recipe_items')



router.get('/list/:recipeId', async (req, res) => { // Get all recipe items of specific recipe
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

router.get('/', async(req, res) => { // Get recipe items by id
    try {
      const recipe_item = await RecipeItems.findAll();
      res.send(recipe_item)
    } catch (error) {
      res.send(error.message)
    }
}) 

router.post('/', async(req, res) => { // Create a recipe item
    try {
      const newRecipeItem = await RecipeItems.create(req.body)
      res.json(newRecipeItem)
    } catch (error) {
      res.send(error.message)
    }
})

module.exports = router;