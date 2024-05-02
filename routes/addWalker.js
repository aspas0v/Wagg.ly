const express = require('express')
const router = express.Router()
const walkerPost = require('../models/walkerPost')

router.get('/addWalker', (req, res) => {
    res.render('walker/addWalker', {title: 'addWalker'})
})

router.post('/addWalker', (req , res) => {
    console.log(req.body);
    const walkerPosts = new walkerPost(req.body)

    walkerPosts.save()
        .then(() => {
            res.redirect('/walkers')
        })
        .catch((err) => {
            console.log(err)
        })

})


module.exports = router