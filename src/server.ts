import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { config } from '@src/configs';
import { settingRoutes } from './routes';
import morganMiddleware from './middlewares/morgan';

export function start() {
  const app: Application = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(cors());

  // add custom middlewares
  app.use(morganMiddleware);

  app.get('/welcome', (req: Request, res: Response) => {
    res.json('Hello, welcome to my API.');
  });

  // TODO this
  settingRoutes(app);

  app.listen(config.PORT, () => {
    console.log('app is running on port', config.PORT);
  });
}
