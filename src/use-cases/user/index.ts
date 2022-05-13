import { makeUserDataAccess } from '@src/data-access/';
import { makeUser } from '@src/entities';
import makeAddUser from './add-user';
import makeGetUser from './get-user';

const addUser = makeAddUser({ makeUser, userDataAccess: makeUserDataAccess });
const getUser = makeGetUser({ makeUser, userDataAccess: makeUserDataAccess });
const userUseCase = {
  addUser,
  getUser,
};
export { addUser, getUser };
export default userUseCase;
