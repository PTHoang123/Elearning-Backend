import mongoose from 'mongoose';
import {createId} from "@paralleldrive/cuid2";



const Schema = mongoose.Schema;

const UnitSchema = new Schema({
    _id: {
        type: String,
        required: true,
        unique: true,
        default: () => createId(),
    },
    courseId: {
        type: String,
    },
    name: {
        type: String,
    },
    course: {
        type: String,
        ref: "Course",
        index: true
    }
})

const Unit = mongoose.model("Unit", UnitSchema);
export default Unit;