const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect(`${process.env.MONOGODB_URI}/LorukiDB`);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        process.exit(1);

    }
};

module.exports = connectDb;