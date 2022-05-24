import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';

import { config } from '@src/configs';
import { settingRoutes } from './routes';
import morganMiddleware from './middlewares/logger';
import { handleErrors } from './middlewares/error';
import { notFoundError } from './middlewares/404';

export function start() {
  const app: Application = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(cors());

  // using gzip to compress response data to client
  app.use(compression());

  // logging middleware
  app.use(morganMiddleware);

  app.get('/welcome', (req: Request, res: Response) => {
    res.json('Hello, welcome to my API.');
  });

  // TODO this
  settingRoutes(app);

  // Not found error handler
  app.use(notFoundError);

  // error handle response
  app.use(handleErrors);

  app.listen(config.PORT, () => {
    console.log('app is running on port', config.PORT);
  });
}
