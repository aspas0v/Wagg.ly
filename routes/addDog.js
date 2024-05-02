const express = require('express')
const router = express.Router()
const dogPost = require('../models/dogPost')


router.get('/addDog', (req, res) => {
    res.render('owner/addDog', {title: 'addDog'})
})

router.post('/addDog', (req , res) => {
    console.log(req.body);
    const dogPosts = new dogPost(req.body)

    dogPosts.save()
        .then(() => {
            res.redirect('/dogs')
        })
        .catch((err) => {
            console.log(err)
        })

})

module.exports = router