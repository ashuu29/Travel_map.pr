const express = require("express");
const connectToMongoDB = require("./connectToMongoDB");

const pinRoute= require("./routes/pins");
const userRoute= require("./routes/users");

const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/pins",pinRoute);
app.use("/api/users",userRoute);

app.listen(8800, () => {
    connectToMongoDB();
    console.log("Server is running");
});
