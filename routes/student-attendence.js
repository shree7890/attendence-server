const {
  getAttendance,
  getAttendanceStatus,
} = require("../controller/student-attendence");

const router = require("express").Router();

router.get("/status", getAttendanceStatus);
router.get("/:id", getAttendance);

module.exports = router;
