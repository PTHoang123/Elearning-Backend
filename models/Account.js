import mongoose from "mongoose";
import {createId} from "@paralleldrive/cuid2";

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    _id: {
        type: String,
        required: true,
        unique: true,
        default: () => createId(),
    },
    userId:{
        type: String,
    },
    type : {
        type: String,
        required: [true, "Please provide a type"]
    },
    provider: {
        type: String,
    },
    providerAccountId: {
        type: String,
        required: true,
        unique: true
    },
    refreshToken: {
        type: String,
        text: true
    },
    accessToken: {
        type: String,
        text: true
    },
    expiresAt: {
        type: Number,
    },
    scope:{
        type: String
    },
    idToken: {
        type: String,
        text: true
    },
    sessionState:{
        type: String
    },
    user: {
        type: String,
        ref: "User",
        index: true,
        required: true
    }
});

const Account = mongoose.model("Account", AccountSchema);
export default Account;