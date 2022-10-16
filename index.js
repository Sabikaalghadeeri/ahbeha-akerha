const express = require('express')
const app = express()
const PORT = 3000
const ejsLayouts = require('express-ejs-layouts')

// MIDDLEWARE
app.set('view engine','ejs')
app.use(ejsLayouts)
// controllers middleware 
app.use('/aheba', require('./controllers/aheba'))
app.use('/akerha', require('./controllers/akerha'))

// ROUTES -- after adding the controllers I have to remove the routes from here
// app.get('/foods', (req, res)=>{
//     res.render('foods.ejs', {foods: ['Pizza', 'chocolate', 'ice-cream']})
// })

// app.get('/movies', (req, res)=>{
//     res.render('movies.ejs', {movies: ['Me Time', 'Red Notice', 'Harry Potter']})
// })

// app.get('/products', (req, res)=>{
//     res.render('product.ejs', {products: ['nail polish', 'relaxing maskes', 'candles']})
// })

app.listen (PORT, ()=>{
    console.log(`You're running the aheba-akerha app!`)
})