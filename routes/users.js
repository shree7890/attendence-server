const router = require("express").Router();
const userController = require("../controller/users");
/**
 * Get all users, include
 * - filter
 * - sort
 * - pagination
 * - select properties
 * @method Get
 * @route api/v1/users?sort["by","name"]
 * @visibility private
 * Get Users /users
Get User by ID /users/userId
Create User /users
Update User /users/userId
Delete User /users/userId
 */

/* 
get user by id
*/

router.get("/:userId", userController.getUserById);
/* 
put user by id
*/
router.put("/:userId", userController.putUserById);
/* 
patch user by id
*/
router.patch("/:userId", userController.patchUserById);
/* 
delete user by id
*/
router.delete("/:userId", userController.deleteUserById);
/* 
get all users
 * Get all users, include
 * - filter
 * - sort
 * - pagination
 * - select properties
 * @method Get
 * @route api/v1/users?sort["by","name"]
 * @visibility private
 * Get Users /users
*/
router.get("/", userController.getUsers);
/* 
create user new user
*/
router.post("/", userController.postUser);

module.exports = router;
