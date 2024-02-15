import mongoose from "mongoose";
import {createId} from "@paralleldrive/cuid2";

const Schema = mongoose.Schema;
const questionSchema = new Schema({
    _id: {
        type: String,
        required: true,
        unique: true,
        default: () => createId(),
    },
    chapterId: {
        type: String,
    },
    question: {
        type: String,
        maxlength: 3000
    },
    answer: {
        type: String,
        maxlength: 3000
    },
    options: {
        type: String,
        maxlength: 3000
    },
    chapter : {
        type: String,
        ref: "Chapter",
        index: true
    }
})

const Question = mongoose.model("Question", questionSchema);
export default Question;