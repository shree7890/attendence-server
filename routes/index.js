const router = require("express").Router();
const authenticate = require("../middleware/authenticate");
const authRoute = require("./authroute");
const usersRoutes = require("./users");
const adminAttendence = require("./admin-attendence");
const studentAttendanceRoutes = require("./student-attendence");
router.use("/api/v1/auth", authRoute);
router.use("/api/v1/users", authenticate, usersRoutes);
router.use("/api/v1/admin/attendence", authenticate, adminAttendence);
router.use("/api/v1/student/attendance", authenticate, studentAttendanceRoutes);
router.get("/get", (_req, res) => {
  res.json({
    message: "server success running",
  });
});
module.exports = router;
