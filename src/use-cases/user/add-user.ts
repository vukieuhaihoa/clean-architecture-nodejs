import { IUserInfo } from '@src/entities/user/interface';
import { IAddUserInput } from './interface';

function makeAddUser({ makeUser, userDataAccess }: IAddUserInput) {
  return async function addUser(userInfo: IUserInfo): Promise<Array<any>> {
    const user = makeUser(userInfo);
    let res: any;
    let err: any;
    // check if email user already exist
    [res, err] = await userDataAccess.findByEmail(user.getEmail());
    console.log({ err });
    if (err != null) return [null, new Error('error when executing db query')];
    if (res) return [null, new Error('user already exist in DB')];

    const data = {
      firstName: user.getFirstName(),
      lastName: user.getLastName(),
      email: user.getEmail(),
    };

    // add to DB
    [res, err] = await userDataAccess.addUser(data);
    if (err != null) return [null, new Error('error when executing db query')];
    return [res, err];
  };
}
export default makeAddUser;
