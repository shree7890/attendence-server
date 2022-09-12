// controller/users.js

// const User = require("../models/User");
const error = require("../utils/error");
const userService = require("../service/user");
const authService = require("../service/auth");
const getUsers = async (_req, res, next) => {
  /**
   * TODO: filter, sort, pagination, select
   */

  try {
    const users = await userService.findUsers();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req, res, next) => {
  const id = req.params.userId;
  try {
    const user = await userService.findUserByProperty("_id", id);
    if (!user) {
      throw error("User not found", 404);
    }
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const postUser = async (req, res, next) => {
  const { name, email, password, roles, accountStatus } = req.body;
  try {
    const user = await authService.registerService({
      name,
      email,
      password,
      roles,
      accountStatus,
    });
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

const putUserById = async (req, res, next) => {
  const id = req.params.userId;
  const { name, email, roles, accountStatus } = req.body;

  try {
    const user = await userService.updateUser(id, {
      name,
      email,
      roles,
      accountStatus,
    });

    if (!user) {
      throw error("User not found", 404);
    }

    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

const patchUserById = async (req, res, next) => {
  const id = req.params.userId;
  const { name, roles, accountStatus } = req.body;
  try {
    const user = await userService.findUserByProperty("_id", id);
    if (!user) {
      throw error("User Not Found", 404);
    }
    user.name = name ?? user.name;
    user.roles = roles ?? user.roles;
    user.accountStatus = accountStatus ?? user.accountStatus;
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const deleteUserById = async (req, res, next) => {
  const id = req.params.userId;
  try {
    const user = await userService.findUserByProperty("_id", id);
    if (!user) {
      throw error("User not found", 404);
    }
    await user.remove();
    res.status(203).send();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUsers,
  getUserById,
  postUser,
  putUserById,
  patchUserById,
  deleteUserById,
};
