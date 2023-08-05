const Note = require("../note/note.model");
exports.createNote = async (req) => {
  const { title, category, text } = req.body;

  if (!title || !category || !text) {
    throw new Error("Please add all fields");
  }

  const note = await Note.create({
    title: req.body.title,
    category: req.body.category,
    text: req.body.text,
    user: req.user.id,
  });

  return note;
};
