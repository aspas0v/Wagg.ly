// check if running in production env
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

//imports
const express = require('express');
const mongoose = require('mongoose');
const db = mongoose.connection


const app = express();
const indexRouter = require('./routes/index')
const dogsRouter = require('./routes/dogs')
const walkerRouter = require('./routes/walkers')
const addDogRouter = require('./routes/addDog')
const addWalkerRouter = require('./routes/addWalker')

//middleware
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('home', 'landing/home')
app.use(express.json())

app.use(express.static('public'))
app.use(express.urlencoded())

//All Routes initialising 
app.use(indexRouter)
app.use(dogsRouter)
app.use(walkerRouter)
app.use(addDogRouter)
app.use(addWalkerRouter)

//DB connection
mongoose.connect(process.env.DATABASE_URL);
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to Mongoose'))


app.listen(process.env.PORT || 3000)