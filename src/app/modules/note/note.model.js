const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a title"],
    },

    category: {
      type: String,
      required: [true, "Please enter a category"],
    },

    text: {
      type: String,
      required: [true, "Please enter a text"],
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    fileData: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Notes", noteSchema);
