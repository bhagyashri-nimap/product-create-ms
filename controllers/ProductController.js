
var express = require('express');
var router = express.Router()
var ProductModel = require('../models/ProductModel')
router.use(express.json());
router.post("/save", async (req, res) => {
    try {
        var data = await ProductModel.save(req.body)
        if (data.value) {
            res.status(200).json(data.data)
        } else {
            res.status(500).json(data)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}),

module.exports = router