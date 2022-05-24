import validator from '@src/utils/validator/joi';
import buildMakeUser from './make-user';
import buildPatchUser from './patch-user';
// using dependency injection
const makeUser = buildMakeUser(validator.userValidatorForAdd);
const patchUser = buildPatchUser(validator.userValidatorForUpdate);
const entities = {
  makeUser,
  patchUser,
};

export { makeUser, patchUser };

export default entities;
