import { IUserInfo } from '@src/entities/user/interface';
import ErrorCustom from '@src/utils/errors';
import { IAddUserInput } from './interface';

function makeAddUser({ makeUser, userDataAccess }: IAddUserInput) {
  return async function addUser(userInfo: IUserInfo): Promise<Array<any>> {
    const user = await makeUser(userInfo);
    let res: any;
    let err: any;
    // check if email user already exist
    [res, err] = await userDataAccess.findByEmail(user.getEmail());
    if (err !== null)
      return [null, new ErrorCustom(10000, 'error when executing db query')];
    if (res) return [null, new ErrorCustom(10001, 'user already exist in DB')];

    const data = {
      firstName: user.getFirstName(),
      lastName: user.getLastName(),
      email: user.getEmail(),
    };

    // add to DB
    [res, err] = await userDataAccess.addUser(data);
    if (err != null)
      return [null, new ErrorCustom(10000, 'error when executing db query')];
    return [res, err];
  };
}
export default makeAddUser;
