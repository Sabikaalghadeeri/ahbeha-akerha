const express =  require('express')
const router = express.Router()

//  routes go here
router.get('/foods', (req, res)=>{
    res.render('foods.ejs', {foods: ['Pizza', 'chocolate', 'ice-cream']})
})

router.get('/movies', (req, res)=>{
    res.render('movies.ejs', {movies: ['Me Time', 'Red Notice', 'Harry Potter']})
})

module.exports = router