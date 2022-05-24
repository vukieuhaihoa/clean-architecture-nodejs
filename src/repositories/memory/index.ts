import { create, findOne } from '@src/repositories/memory/user';

const db = {
  User: {
    create,
    findOne,
  },
};

export default db;
