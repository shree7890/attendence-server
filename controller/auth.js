const { registerService, loginService } = require("../service/auth");

const registerController = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Invalid Data" });
  }
  try {
    const user = await registerService({ name, email, password });
    return res.status(201).json({ message: "User Created Successfully", user });
  } catch (error) {
    next(error);
  }
};

const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const token = await loginService({ email, password });
    return res.status(200).json({ message: "Login Successful", token });
  } catch (e) {
    next(e);
  }
};

const privateController = async (req, res) => {
  console.log("I am authenticated", req.user);
  return res.status(200).json({ message: "I am a private route" });
};

const publicController = (req, res) => {
  return res.status(200).json({ message: "I am a public route" });
};

module.exports = {
  registerController,
  loginController,
  privateController,
  publicController,
};
