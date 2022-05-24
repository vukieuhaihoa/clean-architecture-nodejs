import buildMakeMemoryDataAccess from './query';
import db from '@src/repositories/memory';

const makeUserDataAccess = buildMakeMemoryDataAccess({ UserModel: db.User });

export { makeUserDataAccess };
export default makeUserDataAccess;
