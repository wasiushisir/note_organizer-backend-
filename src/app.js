const express = require("express");
const userRoute = require("../src/app/modules/user/user.route");
const noteRoute = require("../src/app/modules/note/note.route.js");
const { errorHandler } = require("../src/middleware/errormiddleware");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users/", userRoute);
app.use("/api/note/", noteRoute);
app.use(errorHandler);

module.exports = app;
