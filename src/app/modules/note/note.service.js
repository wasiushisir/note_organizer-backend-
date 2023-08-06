const { paginationHelpers } = require("../../../helpers/paginationHelpers");
const Note = require("../note/note.model");
const User = require("../user/user.model");
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

exports.getNote = async (req, queries) => {
  const andCondition = [];
  const { category, searchTerm } = queries;
  if (category) {
    andCondition.push({ category: category });
  }

  if (searchTerm) {
    andCondition.push({
      title: {
        $regex: searchTerm,
        $options: "i",
      },
    });
  }

  const { page, limit, skip } = paginationHelpers(queries);

  const whereConditions =
    andCondition.length > 0 ? { $and: andCondition } : { user: req.user.id };

  const note = await Note.find(whereConditions).skip(skip).limit(limit);

  const total = await Note.countDocuments();
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: note,
  };
};

exports.upadateNote = async (req) => {
  const user = await User.find({ user: req.user.id });
  const note = await Note.find({ _id: req.params.id });

  if (!note) {
    res.status(400);
    throw new Error("Note not found");
  }

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (note?.user?.toString() !== user?.id) {
    res.status(401);
    throw new Error("user not authorized");
  }

  const updatedNote = await Note.findOneAndUpdate(note._id, req.body, {
    new: true,
  });

  return updatedNote;
};

exports.deleteNote = async (req) => {
  const user = await User.find({ user: req.user.id });
  const note = await Note.find({ _id: req.params.id });

  if (!note) {
    res.status(400);
    throw new Error("Note not found");
  }

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (note?.user?.toString() !== user?.id) {
    res.status(401);
    throw new Error("user not authorized");
  }

  const result = await Note.deleteOne({ _id: req.params.id });

  return result;
};
