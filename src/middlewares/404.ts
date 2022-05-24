import { Request, Response } from 'express';
import statusCodes from 'http-status';

export const notFoundError = (req: Request, res: Response) => {
  res.status(statusCodes.BAD_REQUEST);
  res.json({
    statusCode: statusCodes.NOT_FOUND,
    message: 'The endpoint cannot be found.',
  });
};
