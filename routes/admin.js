const { Router } = require("express")
const { adminModel, courseModel } = require('../db')
const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("../config")
const adminRouter = Router();
const {adminMiddleware} = require("../middleware/admin")


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

adminRouter.post("/course",adminMiddleware, async function(req,res){

    const adminId = req.userId;
    const {title, description, imageUrl, price} = req.body;

    const course = await courseModel.create({
        title, description, imageUrl, price, creatorId: adminId

    })
    res.json({
        message:"Course Created",
        courseId: course._id

    })
})

adminRouter.put("/course",adminMiddleware, async function(req,res){
    const adminId = req.userId;
    const {title, description, imageUrl, price, courseId } = req.body;

    const course = await courseModel.updateOne({
        _id: courseId,
        creatorId: adminId
    }, {
        title, description, imageUrl, price,

    })
    res.json({
        message:"Course Updated",
        courseId: course._id

    })
})

adminRouter.get("/course/bulk", adminMiddleware, async function(req,res){
    const adminId = req.userId
    const courses = await courseModel.find({
        creatorId: adminId
    })
    res.json({
        message:"Course Find",
        courses

    })
})

// adminRouter.put("/course//bulk", function(req,res){
//     res.json({
//         message:" admin change coure content endpoint"
//     })
// })

module.exports = {
    adminRouter: adminRouter
}