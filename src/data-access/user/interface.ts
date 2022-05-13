import { IUserInfo } from '@src/entities/user/interface';

export interface IUserDataAccess {
  findByEmail: (email: string) => Promise<Array<any>>;
  addUser: (info: IUserInfo) => Promise<Array<any>>;
}
