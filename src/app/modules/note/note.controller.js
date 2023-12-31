const asyncHandler = require("express-async-handler");
const {
  createNote,
  getNote,
  upadateNote,
  deleteNote,
} = require("./note.service");

exports.createNoteFromDb = asyncHandler(async (req, res) => {
  // const { ...data } = req.body;
  // console.log(data);
  const note = await createNote(req);

  if (note) {
    res.status(200).json({
      success: true,
      message: "note created successfully",
      data: note,
    });
  } else {
    res.status(400);
    throw new Error("Failed to create note");
  }
});

exports.getNoteFromDb = asyncHandler(async (req, res) => {
  const queries = {};
  if (req.query.category) {
    const category = req.query.category;
    queries.category = category;
  }

  if (req.query.searchTerm) {
    const searchTerm = req.query.searchTerm;
    queries.searchTerm = searchTerm;
  }

  if (req.query.limit) {
    const limit = req.query.limit;
    queries.limit = limit;
  }
  if (req.query.page) {
    const page = req.query.page;
    queries.page = page;
  }

  const note = await getNote(req, queries);

  if (note) {
    res.status(200).json({
      success: true,
      message: "Retrived note successfully",
      meta: note.meta,
      data: note.data,
    });
  } else {
    res.status(400);
    throw new Error("Failed to retrive note");
  }
});

exports.updateNoteFromDb = asyncHandler(async (req, res) => {
  const note = await upadateNote(req);

  if (note) {
    res.status(200).json({
      success: true,
      message: "Updated note successfully",
      data: note,
    });
  } else {
    res.status(400);
    throw new Error("Failed to update note");
  }
});

exports.deleteNoteFromDb = asyncHandler(async (req, res) => {
  const note = await deleteNote(req);

  if (note) {
    res.status(200).json({
      success: true,
      message: "Note deleted successfully",
      data: note._id,
    });
  } else {
    res.status(400);
    throw new Error("Failed to delete note");
  }
});
