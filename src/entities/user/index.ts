import buildMakeUser from './make-user';
import buildPatchUser from './patch-user';
// using dependency injection
const makeUser = buildMakeUser();
const patchUser = buildPatchUser();
const entities = {
  makeUser,
  patchUser,
};

export { makeUser, patchUser };

export default entities;
