const express = require('express')
const router = express.Router()
const walkerPost = require('../models/walkerPost')



router.get('/walkers', (req , res) => {
    walkerPost.find()
        .then((result) => {
            console.log(result)
            res.render('walker/walkers', {title: 'All Walkers', walkerPosts: result })
        })
        .catch((err) => {
            console.log(err);
        })
})


module.exports = router