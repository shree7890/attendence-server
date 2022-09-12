const { addMinutes, isAfter } = require("date-fns");
const AdminAttendence = require("../models/AdminAttendence");
const error = require("../utils/error");

const getEnable = async (_req, res, next) => {
  try {
    const running = await AdminAttendence.findOne({ status: "RUNNING" });
    if (running) {
      throw error("Already running attendence", 400);
    }
    const attendence = new AdminAttendence();
    await attendence.save();
    res.status(201).json({ message: "attendence success", attendence });
  } catch (err) {
    next(err);
  }
};
const getDisable = async (req, res, next) => {
  try {
    const running = await AdminAttendence.findOne({ status: "RUNNING" });
    if (!running) {
      throw error("Not running attendence", 400);
    }
    running.status = "COMPLETED";
    await running.save();
    res.status(201).json(running);
  } catch (err) {
    next(err);
  }
};
const getStatus = async (req, res, next) => {
  try {
    const running = await AdminAttendence.findOne({ status: "RUNNING" });
    if (!running) {
      throw error("Not running attendence", 400);
    }
    const started = addMinutes(new Date(running.createdAt), running.timeLimit);
    if (isAfter(new Date(), started)) {
      running.status = "COMPLETED";
      await running.save();
    }
    res.status(200).json(running);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getEnable,
  getDisable,
  getStatus,
};
