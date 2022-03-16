require("dotenv").config();
const mongoose = require("mongoose");

const connectDb = () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("connected to database success!"))
        .catch((err) => console.log("ERROR", err));
};

module.exports = connectDb;
