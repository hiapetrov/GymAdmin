const express = require('express');
const {
  authUser,
  createUser,
  getUsers,
  logoutUser,
//   updateUserProfile,
} = require('../routecontrol/userController');

const router = express.Router();

router.post('/', createUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.get('/', getUsers)
//   .route('/profile')
//   .get(protect, getUserProfile)
//   .put(protect, updateUserProfile);

module.exports = router;