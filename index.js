const express = require('express')
const app = express()
const port = 3000

app.post("/user/signup", function(req,res){
    res.json({
        message:"signup endpoint"
    })
})

app.post("/user/signin", function(req,res){
    res.json({
        message:"signin endpoint"
    })
})

app.get("/courses", function(req,res){
    res.json({
        message:"All courses endpoint"
    })
})

app.get("/user/purchases", function(req,res){
    res.json({
        message:"user purchesed course endpoint"
    })
})

app.post("/user/signup", function(req,res){
    res.json({
        message:"signup endpoint"
    })
})

app.get("/course/purchase", function(req,res){
    res.json({
        message:"user purchase course endpoint"
    })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})