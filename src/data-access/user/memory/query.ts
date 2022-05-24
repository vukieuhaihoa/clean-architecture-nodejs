import { IUserInfo } from '@src/entities/user/interface';
import { IUserDataAccess } from '../interface';

function buildMakeMemoryDataAccess({
  UserModel,
}: {
  UserModel: any;
}): IUserDataAccess {
  async function addUser(info: IUserInfo) {
    try {
      const res = await UserModel.create(info);
      return [res, null];
    } catch (error) {
      return [null, error];
    }
  }

  async function findByEmail(email: string) {
    try {
      const res = await UserModel.findOne({ email });
      return [res, null];
    } catch (error) {
      return [null, error];
    }
  }
  return Object.freeze({
    addUser,
    findByEmail,
  });
}

export default buildMakeMemoryDataAccess;
