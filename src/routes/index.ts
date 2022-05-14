import { Application } from 'express';

import userRoute from '@src/routes/v1/user';

export const settingRoutes = (app: Application) => {
  app.use('/api/v1', userRoute);
};
