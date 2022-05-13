import { IAddUserInput } from './interface';

function makeGetUser({ userDataAccess }: IAddUserInput) {
  return async function getUser(email: string): Promise<Array<any>> {
    const [checkExist, err] = await userDataAccess.findByEmail(email);
    return [checkExist, err];
  };
}
export default makeGetUser;
