
var express = require('express');
var router = express.Router()
var productService = require('../controllers/ProductController')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(productService)


module.exports = router