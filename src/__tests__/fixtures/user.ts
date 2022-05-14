import faker from '@faker-js/faker';

import { IUserInfo } from '@src/entities/user/interface';

function makeFakeUser(overrides: any) {
  const user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
  };
  return {
    ...user,
    ...overrides,
  };
}

export default makeFakeUser;
