import ErrorCustom from '@src/utils/errors';
import { IAddUserInput } from './interface';

function makeGetUser({ userDataAccess }: IAddUserInput) {
  return async function getUser(email: string): Promise<Array<any>> {
    const [checkExist, err] = await userDataAccess.findByEmail(email);
    if (err !== null)
      return [null, new ErrorCustom(10000, 'error when executing db query')];
    return [checkExist, err];
  };
}
export default makeGetUser;
