import { NextFunction, Request, Response } from 'express';
import statusCodes from 'http-status';

import { getUser } from '@src/use-cases/user';

export const getUserController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.query;

  getUser(email as string)
    .then((result: any) => {
      const [data, err] = result;
      if (err) next(err);
      else
        res.status(statusCodes.OK).json({
          data,
        });
    })
    .catch(err => {
      next(err);
    });
};
