import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import statusCodes from 'http-status';

import ErrorCustom from '@src/utils/errors';

export const handleErrors: ErrorRequestHandler = (
  err: Error | ErrorCustom,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof ErrorCustom) {
    const { code, message } = err;
    res.status(statusCodes.BAD_REQUEST);
    res.json({
      statusCode: code,
      message,
    });
  } else {
    res.status(statusCodes.INTERNAL_SERVER_ERROR);
    res.json({
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
      message: err.message || 'Error at server',
    });
  }
};
