const express = require('express')
const router = express.Router()

//Express router to landing page
router.get('/home', (req, res) => {
    res.render('landing/home' , {title: 'home'})
})





module.exports = router