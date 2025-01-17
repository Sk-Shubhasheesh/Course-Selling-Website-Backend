const { Router } = require("express");
const { userModel} = require("../db");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "shubhu02"
const userRouter = Router();

userRouter.post("/signup", async function(req, res) {
    const { email, password, firstName, lastName } = req.body;
    await userModel.create({
        email: email,
        password: password,
        firstName: firstName, 
        lastName: lastName
    })
    
    res.json({
        message: "Signup succeeded"
    })
})




userRouter.post("/signin", async function (req, res) {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email, password });

        if (user) {
            const token = jwt.sign(
                {
                    id: user._id,
                },
                JWT_USER_PASSWORD
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
});


userRouter.get("/purchases", function(req,res){
    res.json({
        message:"user purchesed course endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}