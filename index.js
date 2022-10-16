const app = express()
const PORT = 3000

// MIDDLEWARE
app.set('view engine','ejs')

// ROUTES
app.listen (PORT, ()=>{
    console.log("LAYOUTS AND CONTROLLERS")
})