const express = require("express");
const userRoute = require("../src/app/modules/user/user.route");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users/", userRoute);

module.exports = app;
