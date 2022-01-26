const router = require('express').Router()
const Recipe = require('../db/recipe')


router.get('/', async (req, res) => { // Get all recipes
    try {
      const recipes = await Recipe.findAll()
      res.send(recipes)
    } catch (error) {
      res.send(error.message)
    }
})

router.get('/:id', async(req, res) => { // Get recipe by id
    try {
      const recipe = await Recipe.findByPk(req.params.id)
      res.send(recipe)
    } catch (error) {
      res.send(error.message)
    }
}) 

router.post('/', async(req, res) => { // Post recipe
    try {
      const newRecipe = await Recipe.create(req.body)
      res.json(newRecipe)
    } catch (error) {
      res.send(error.message)
    }
})

module.exports = router;