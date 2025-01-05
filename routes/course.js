const{ Router } = require('express');
const courseRouter = Router();


courseRouter.post("/course/purchase", function(req,res){
    res.json({
        message:"user purchase course endpoint"
    })
})
courseRouter.get("/preview", function(req,res){
    res.json({
        message:"All courses endpoint"
    })
})

module.exports = {
    courseRouter: courseRouter
}