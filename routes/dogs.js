const express = require('express')
const dogPost = require('../models/dogPost')
const router = express.Router()


//API GET dogpost & route to dog page
router.get('/dogs', (req , res) => {
    dogPost.find()
        .then((result) => {
            console.log(result)
            res.render('owner/dogs', {title: 'All Dogs', dogPosts: result })
        })
        .catch((err) => {
            console.log(err);
        })
})






module.exports = router