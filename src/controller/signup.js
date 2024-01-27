import { User } from "../model/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { CustomError } from "../utils/errorHandler.js";

/*
    @desc register user
    @route /api/v1/auth/signup
    @access public
*/
const signup = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  const allRequiredFieldFillled = [username, email, password].every(
    (item) => item === undefined
  );

  if (allRequiredFieldFillled) {
    throw new CustomError(400, "All fields are required");
  }

  const existingUser = await User.findOne({ $or: [{ email }, { username }] });

  if (existingUser) {
    throw new CustomError(400, "User already exists");
  }

  await User.create({
    ...req.body,
  });

  res.json("User Registered");
});

/*
    @desc authenticate user
    @route /api/v1/auth/signin
    @access public
*/

const signin = async (req, res) => {
  res.send("Test");
};

export { signup, signin };
