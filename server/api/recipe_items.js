const router = require('express').Router()
const RecipeItems = require('../db/recipe_items')


router.get('/', async (req, res) => { // Get all recipe items
    try {
      const recipe_items = await RecipeItems.findAll()
      res.send(recipe_items)
    } catch (error) {
      res.send(error.message)
    }
})

router.get('/:id', async(req, res) => { // Get recipe items by id
    try {
      const recipe_item = await RecipeItems.findByPk(req.params.id)
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