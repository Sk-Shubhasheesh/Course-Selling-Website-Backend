const mongoose =require('mongoose');



const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstName:String,
    lastName:String,

});

const adminSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstName:String,
    lastName:String,
});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
});

const purchesSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId,


});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchesModel = mongoose.model("purches", purchesSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchesModel
}