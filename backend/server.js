const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const app = express();
const { readdirSync } = require("fs");

const dotenv = require("dotenv");

dotenv.config();

// middleware
app.use(cors());

// routes
readdirSync("./routes").map((f) => app.use("/", require("./routes/" + f)));

// database
mongoose.connect(process.env.MONGODB_CONNECTION_URL).then(() => {
	console.log("database connected");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`server running on port ${port}`);
});
