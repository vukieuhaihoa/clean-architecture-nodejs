import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

import { IUserInfo } from '@src/entities/user/interface';

const PATH = path.resolve('src/repositories/memory/fake.json');

async function readData(url: string) {
  try {
    const data = readFileSync(url);
    const res = await JSON.parse(data.toString());
    console.log({ res });

    return res;
  } catch (error) {
    console.log('Error when reading data from json');
    return null;
  }
}

async function writeData(url: string, data: any) {
  try {
    writeFileSync(url, JSON.stringify(data, null, 2));
  } catch (error) {
    console.log('Error when writing data from json');
  }
}

async function create(info: IUserInfo) {
  try {
    console.log('create');

    const users = await readData(PATH);
    const user = {
      ...info,
      id: users.length + 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    users.push(user);

    await writeData(PATH, users);
    return user;
  } catch (error) {
    console.log('error when create new user JSON');
    return null;
  }
}

async function findOne({ email }: { email: string }) {
  try {
    console.log('findOne');

    const users = await readData(PATH);
    console.log({ users });

    const mapToArray = [...users];
    const res = mapToArray.find(user => user.email === email);
    return res;
  } catch (error) {
    console.log('error when find user JSON');
    return null;
  }
}

function test() {
  console.log('TEST');
}

export { create, findOne, test };
