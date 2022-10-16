const express = require('express')
const app = express()
const PORT = 3000
const ejsLayouts = require('express-ejs-layouts')

// MIDDLEWARE
app.set('view engine','ejs')
app.use(ejsLayouts)

// ROUTES
app.get('/', (req, res) => {
    res.render('home.ejs')
})
app.get('/', (req, res) => {
    res.render('foods.ejs')
})
// favorite animals
app.get('/animals', (req, res)=>{
    res.render('animals.ejs', {animals: ['sand crab', 'corny joke dog', 'benedict the sea cucumber']})
})
// favorite foods
app.get('/foods', (req, res)=>{
    res.render('foods.ejs', {foods: ['Pizza', 'chocolate', 'ice-cream']})
})

app.listen (PORT, ()=>{
    console.log(`You're running the aheba-akerha app!`)
})