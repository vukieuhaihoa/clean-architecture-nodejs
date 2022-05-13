import { IUserDataAccess } from '@src/data-access/user/interface';
import { IUser, IUserInfo } from '@src/entities/user/interface';

export interface IAddUserInput {
  makeUser: (userInfo: IUserInfo) => IUser;
  userDataAccess: IUserDataAccess;
}
