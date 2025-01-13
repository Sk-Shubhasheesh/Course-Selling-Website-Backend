const { Router } = require("express")
const { adminModel } = require('../db.js')

const adminRouter = Router();
adminRouter.post("/signup", function(req,res){
    res.json({
        message:"admin signup endpoint"
    })
})

adminRouter.post("/signin", function(req,res){
    res.json({
        message:" admin signin endpoint"
    })
})

adminRouter.post("/course", function(req,res){
    res.json({
        message:" admin course create endpoint"
    })
})

adminRouter.put("/course//bulk", function(req,res){
    res.json({
        message:" admin change coure content endpoint"
    })
})

adminRouter.get("/course//bulk", function(req,res){
    res.json({
        message:" admin see your create coure endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}