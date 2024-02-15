import mongoose from "mongoose";
import {createId} from "@paralleldrive/cuid2";
const Schema = mongoose.Schema;


const CourseSchema = new Schema({
    _id : {
        type: String,
        required: true,
        unique: true,
        default: () => createId(),
    },
    name : {
        type: String,
    },
    image: {
        type: String,
    },
    units: [{
        type: String,
        ref: "Unit"
    }],
    
})

const Course = mongoose.model("Course", CourseSchema);

export default Course;