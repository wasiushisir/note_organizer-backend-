const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },

  email: {
    type: String,
    required: [true, "Please enter an email"],
  },

  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
});

module.exports = mongoose.model("User", userSchema);
