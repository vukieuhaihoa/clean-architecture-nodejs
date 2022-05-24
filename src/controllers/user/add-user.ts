import { NextFunction, Request, Response } from 'express';
import statusCodes from 'http-status';

import { addUser } from '@src/use-cases/user';
import { ICreatUserRequest } from './interface';

export const addUserController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { firstName, lastName, email } = <ICreatUserRequest>req.body;
  addUser({ firstName, lastName, email })
    .then((result: any) => {
      const [data, err] = result;
      if (err !== null) next(err);
      else
        res.status(statusCodes.OK).json({
          data,
        });
    })
    .catch(err => {
      next(err);
    });
};
