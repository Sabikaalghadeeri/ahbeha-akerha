const express =  require('express')
const router = express.Router()

//  routes go here
router.get('/products', (req, res) => {
    res.render('products.ejs', {products: ['nail polish', 'relaxing maskes', 'candles']})
})

router.get('/animals', (req, res)=>{
    res.render('animals.ejs', {animals: ['sand crab', 'corny joke dog', 'benedict the sea cucumber']})

})

module.exports = router