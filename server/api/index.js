const router = require('express').Router()

router.use('/recipe', require('./recipe'))
router.use('/recipe_items', require('./recipe_items'))

module.exports = router;