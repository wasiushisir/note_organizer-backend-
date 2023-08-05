const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { registerUser, loginUser } = require("./user.service");

exports.registerUserFromDb = asyncHandler(async (req, res) => {
  const { ...data } = req.body;

  const user = await registerUser(data);

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: jwtToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user");
  }
});

exports.loginUserFromDb = async (req, res) => {
  const { ...data } = req.body;
  const { email, password } = data;
  const user = await loginUser(data);

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: jwtToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credintials");
  }
};

const jwtToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_TOKEN, {
    expiresIn: "4d",
  });
};