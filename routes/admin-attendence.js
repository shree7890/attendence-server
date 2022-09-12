const {
  getEnable,
  getDisable,
  getStatus,
} = require("../controller/admin-attendence");

const router = require("express").Router();
router.get("/enable", getEnable);
router.get("/disable", getDisable);
router.get("/status", getStatus);

module.exports = router;
