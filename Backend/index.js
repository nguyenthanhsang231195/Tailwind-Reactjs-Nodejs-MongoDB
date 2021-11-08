const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRoute = require("./Routes/userRoute.js");

dotenv.config();

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Liên kết MongoDB thành công"))
    .catch((err) => {
        console.log(err);
});

app.use(express.json());
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running!");
});

