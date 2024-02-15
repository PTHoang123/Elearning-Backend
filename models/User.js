
import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {createId} from "@paralleldrive/cuid2";


const Schema = mongoose.Schema;
const UserSchema = new Schema({
    _id: {
        type: String,
        required: true,
        unique: true,
        default: () => createId(),
    },
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    emailVerified: Date,
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: 6,
        select: false
    },
    image: {
        type: String,
        default: "default.jpg"
    },
    credits: {
        type: Number,
        default: 10
    },
    session: [{
        type: String,
        ref: "Session"
    }],
    account: [{
        type: String,
        ref: "Account"
    }]
});


UserSchema.methods.createJWT = function (){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

UserSchema.methods.correctPassword = async function (candidatePassword){
    return await bcrypt.compare(candidatePassword, this.password);
}


const User = mongoose.model("User", UserSchema);
export default User;