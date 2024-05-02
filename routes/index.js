const express = require('express')
const router = express.Router()

router.get('/home', (req, res) => {
    res.render('landing/home' , {title: 'home'})
})





module.exports = router