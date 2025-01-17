const { Router } = require("express")
const { adminModel } = require('../db')
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = "admin02"
const adminRouter = Router();


adminRouter.post("/signup", async function(req,res){
    const { email, password, firstName, lastName } = req.body;
    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName, 
        lastName: lastName
    })
    
    res.json({
        message: "Admin Signup succeeded"
    })
})

adminRouter.post("/signin", async function(req,res){
    const { email, password } = req.body;

    try {
        const admin = await adminModel.findOne({ email, password });

        if (admin) {
            const token = jwt.sign(
                {
                    id: admin._id,
                },
                JWT_ADMIN_PASSWORD
            );

            return res.json({
                token: token,
            });
        } else {
            return res.status(403).json({
                message: "Incorrect credentials",
            });
        }
    } catch (error) {
        // Handle any unexpected errors
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
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