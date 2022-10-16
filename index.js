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

// favorite animals
app.get('/animals', (req, res)=>{
    res.render('animals.ejs', {animals: ['sand crab', 'corny joke dog', 'benedict the sea cucumber']})
})

app.listen (PORT, ()=>{
    console.log(`You're running the aheba-akerha app!`)
})