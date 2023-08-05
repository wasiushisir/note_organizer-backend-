const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../app/modules/user/user.model");

exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get token from header

      token = req.headers.authorization.split(" ")[1];

      // verify token

      const deoded = jwt.verify(token, process.env.JWT_TOKEN);

      // get user from token

      req.user = await User.findOne({ _id: deoded.id }).select("-password");
      // console.log(req.user);

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not Authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("no token no authorized");
  }
});
