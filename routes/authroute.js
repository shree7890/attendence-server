const {
  registerController,
  loginController,
  publicController,
  privateController,
} = require("../controller/auth");
const authenticate = require("../middleware/authenticate");

const router = require("express").Router();
router.post("/register", registerController);
router.post("/login", loginController);
router.get("/private", authenticate, privateController);
router.get("/public", publicController);
module.exports = router;
