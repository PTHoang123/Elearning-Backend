import mongoose from "mongoose";

const connectDB = (url) => {
    return   mongoose.connect(url, {
        autoIndex: false,
    })
}

export default connectDB;