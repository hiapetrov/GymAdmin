import express from 'express';
import {
  authUser,
  createUser,
  getUsers,
  logoutUser,
  updateUserProfile,
  getUserProfile
} from '../routecontrol/userController.js';
import {protect} from '../middleware/authHandler.js'

const router = express.Router();

router.post('/', createUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.get('/', getUsers)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;