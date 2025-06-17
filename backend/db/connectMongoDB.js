import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");
    }
    catch(error) {
        console.log(`error connecting to MongoDB : ${error}`);
        process.exit(1);
    }
}

export default connectMongoDB;