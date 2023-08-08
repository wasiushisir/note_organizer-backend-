const multer = require("multer");

// const storage = multer.memoryStorage(); // Store the file data in memory as a buffer
// const upload = multer({ storage });

const upload = multer({ dest: "uploads/" });
module.exports = upload;
