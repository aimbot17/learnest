import { Router } from 'express';
import authRouter from './auth.route';
import betaAccess from './beta.user.route';
import ApiResponse from '../utils/apiResponse.utils';

const router = Router();

router.use('/auth', authRouter);
router.use('/beta-access', betaAccess);

router.route('/health').get(function (req, res) {
  return res
    .status(200)
    .json(new ApiResponse(200, null, 'Server up and running 🎉🎉'));
});

export default router;
