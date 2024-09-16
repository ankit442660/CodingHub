const express = require("express");
const {
  getAllUsers,
  getAllContact,
  deleteUserById,
  deleteContactById,
  getUsersById,
  updateUserById,
} = require("../Controllers/admin.controllers");
const adminMiddleware = require("../middlewares/admin-middleware");
const authMiddleWare = require("../middlewares/authMiddleWare");
const router = express.Router();

router.route("/users").get(authMiddleWare, adminMiddleware, getAllUsers);

router.route("/users/:id").get(authMiddleWare, adminMiddleware, getUsersById);

router
  .route("/users/update/:id")
  .patch(authMiddleWare, adminMiddleware, updateUserById);
router
  .route("/users/delete/:id")
  .delete(authMiddleWare, adminMiddleware, deleteUserById);
router
  .route("/contact/delete/:id")
  .delete(authMiddleWare, adminMiddleware, deleteContactById);
router.route("/contacts").get(authMiddleWare, adminMiddleware, getAllContact);

module.exports = router;
