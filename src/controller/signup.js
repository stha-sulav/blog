import { User } from "../model/user.model.js";

/*
    @desc register user
    @route /api/v1/auth/signup
    @access public
*/

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    [username, email, password].every(
      (item) => item === undefined && item === ""
    )
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newUser = await User.create({
    ...req.body,
  });

  res.send("User Registered");
};

/*
    @desc authenticate user
    @route /api/v1/auth/signin
    @access public
*/

const signin = async (req, res) => {
  res.send("Test");
};

export { signup, signin };
