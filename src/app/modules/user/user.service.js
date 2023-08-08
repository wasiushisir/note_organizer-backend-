const User = require("../user/user.model");
const bcrypt = require("bcryptjs");
exports.registerUser = async (data) => {
  const { name, email, password } = data;
  if (!name || !email || !password) {
    // res.status(400);
    throw new Error("Please add all fields");
  }

  // check user exist or not

  const userExist = await User.findOne({ email });
  if (userExist) {
    // res.status(400);
    throw new Error("User alredy exist");
  }

  //hash password

  const salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(password, salt);

  // create user

  const user = await User.create({
    name,
    email,
    password: hashpassword,
  });

  return user;
};

exports.loginUser = async (data) => {
  const { email, password } = data;
  // console.log(data);

  // check for user email

  const user = await User.findOne({ email });

  return user;
};
