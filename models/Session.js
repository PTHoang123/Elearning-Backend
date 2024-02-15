import mongoose  from "mongoose";

const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    _id: {
        type: String,
        required: true,
        unique: true,
        default: () => createId(),
    },
    sessionToken:{
        type: String,
        unique: true
    },
    userId:{
        type: String,
        required: true
    },
    expiresAt:{
        type: Date,
    },
    user: {
        type: String,
        ref: "User",
    }

})

const Session = mongoose.model("Session", SessionSchema);

export default Session;