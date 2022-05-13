import { Request } from 'express';

declare interface ProtectedRequest extends Request {
  accessToken: string;
  user: any;
}

declare interface Tokens {
  accessToken: string;
  refreshToken: string;
}
