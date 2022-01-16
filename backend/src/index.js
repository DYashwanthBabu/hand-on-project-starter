const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

mongoose.connect(
    process.env.MONGODB_URL).then(() =>{
        console.log("Conec to MD");
    })
    .catch((err) =>{
        console.log("Error conn "+err);
    });

    app.get("/hello-world", (req, res) =>{
        res.send("Hello world");
    });

app.listen(process.env.PORT, () => {
    console.log("Backed see started"+process.env.PORT);
});