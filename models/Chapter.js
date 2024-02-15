import mongoose from "mongoose";
import {createId} from "@paralleldrive/cuid2";

const Schema = mongoose.Schema;

const chapterSchema = new Schema({
    _id: {
        type: String,
        required: true,
        unique: true,
        default: () => createId(),
    },
    unitId: {
        type: String,
    },
    name: {
        type: String,
    },
    youtubeSearchQuery: {
        type: String,
    },
    videoId: {
        type: String,
    },
    summary: {
        type: String,
        maxlength: 3000
    },
    questions: [{
        type: String,
        ref: "Question"
    }],
})

const chapter = mongoose.model("Chapter", chapterSchema);
export default chapter;