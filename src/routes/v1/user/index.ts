import express from 'express';

import userController from '@src/controllers/user';

const router = express.Router();

router.post('/user', userController.addUserController);

router.get('/user', userController.getUserController);

export default router;
