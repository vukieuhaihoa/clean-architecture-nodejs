import faker from '@faker-js/faker';
import path from 'path';
import fs from 'fs';

const LEN_OF_USERS = 10;

(async () => {
  const users = [];
  for (let i = 0; i < LEN_OF_USERS; i++) {
    const fakeUser = {
      id: i + 1,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    users.push(fakeUser);
  }

  // write to src/repositories/memory/user.json
  const data = await JSON.stringify(users);
  fs.writeFile(
    path.resolve('src/repositories/memory/fake.json'),
    data,
    {},
    err => {
      if (err) throw new Error('Error when random db memory');
      console.log('Random db success');
    }
  );
})();
