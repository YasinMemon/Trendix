import mongoose from "mongoose";

const connection = {};
const mongodbUrl = process.env.MONGO_URI;

export const dbConnect = async () => {
    if (connection.isConnected) {
        console.log("Already connected to the database");
        return;
    }

    try {
        const db = await mongoose.connect(mongodbUrl);

        connection.isConnected = db.connections[0].readyState;
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1);
    }
};