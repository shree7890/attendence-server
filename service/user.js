const User = require("../models/User");

const findUserByProperty = (key, value) => {
  if (key === "_id") {
    return User.findById(value);
  }
  return User.findOne({ [key]: value });
};

// find user
const findUsers = () => {
  return User.find();
};
// create new user
const createNewUser = ({ name, email, password, roles, accountStatus }) => {
  const user = new User({
    name,
    email,
    password,
    roles: roles ? roles : "STUDENT",
    accountStatus: accountStatus ? accountStatus : "PENDING",
  });
  return user.save();
};

const updateUser = async (id, data) => {
  const user = await findUserByProperty("email", data.email);

  if (user) {
    throw error("Email already in use", 400);
  }

  return User.findByIdAndUpdate(id, { ...data }, { new: true });
};
module.exports = {
  findUserByProperty,
  createNewUser,
  findUsers,
  updateUser,
};
