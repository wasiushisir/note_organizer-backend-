const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT;
const app = require("../src/app");
app.get("/", (req, res) => {
  res.send("Hello World!");
});

async function main() {
  await mongoose.connect(process.env.DATABASE_URL);
  console.log("database connected");

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main();
