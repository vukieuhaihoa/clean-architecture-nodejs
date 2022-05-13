import buildMakePgDataAccess from './query';
import db from '@src/repositories/pg/sequelize/models';

const makeUserDataAccess = buildMakePgDataAccess({ UserModel: db.User });

export { makeUserDataAccess };
export default makeUserDataAccess;
