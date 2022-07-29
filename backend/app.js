const express = require("express");
const errorMiddleware = require("./middleware/error");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
// app.use()
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
app.use("/api/v1", product);
app.use("/api/v1/", user);

//middleware for error
app.use(errorMiddleware);

module.exports = app;
