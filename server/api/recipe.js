const router = require('express').Router()
const Recipe = require('../db/recipe')

router.get('/getRecent', async (req, res) => {  // Get most recent recipe | http://localhost:3001/recipe/getRecent
  try {
    const recipes = await Recipe.findOne({
      order: [ [ 'id', 'DESC' ]],
      });
      console.log("Most Recent Id: " + recipes.id);
    res.send(recipes)
  } catch (error) {
    res.send(error.message)
  }
})

router.get('/', async (req, res) => { // Get all recipes | http://localhost:3001/recipe/
    try {
      const recipes = await Recipe.findAll()
      res.send(recipes)
    } catch (error) {
      res.send(error.message)
    }
})

router.get('/:id', async(req, res) => { // Get recipe by id | http://localhost:3001/recipe/(id here)
    try {
      const recipe = await Recipe.findByPk(req.params.id)
      res.send(recipe)
    } catch (error) {
      res.send(error.message)
    }
}) 

router.post('/addRecipe', async(req, res) => { // Post recipe | http://localhost:3001/recipe and then post
    try {
      const newRecipe = await Recipe.create(req.body)
      res.json(newRecipe)
    } catch (error) {
      res.send(error.message)
    }
})

module.exports = router;