
var express = require('express');
var router = express.Router()
var ProductModel = require('../models/ProductModel')
var {authenticateUser} = require("../config/middleware");
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
router.get("/getAll", authenticateUser,async (req, res) => {
    try {
        var data = await ProductModel.getAll(req.headers.accesstoken)
        if (data.value) {
            res.status(200).json(data.data)
        } else {
            res.status(500).json(data)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}),
router.post("/signup", async (req, res) => {
    try {
        var data = await ProductModel.signUp(req.body)
        if (data.value) {
            res.status(200).json(data.data)
        } else {
            res.status(500).json(data)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}),
//Login
router.post("/login", async (req, res) => {
    try {
        let outputData = await ProductModel.login(req.body)
        if (outputData && outputData.value) {
            res.status(200).json(outputData.data)
        } else {
            res.status(500).json(outputData)
        }
    } catch (error) {
        console.log("inside err", error)
        res.status(500).send(error)
    }
})
module.exports = router