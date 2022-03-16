const express = require("express");
require("dotenv").config();
const connectDb = require("./config/connectDb");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDb();

app.use("/admin", require("./routes/admin"));
app.use("/user", require("./routes/user"));
app.use("/post", require("./routes/post"));

app.listen(PORT, () => {
    console.log(`SERVER STARTED ON PORT ${PORT}`);
});
