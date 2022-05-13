import { IUserInfoPatch } from './interface';

export interface IUser {
  getFirstName: () => string;
  getLastName: () => string;
  getEmail: () => string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function buildPatchUser() {
  return (info: IUserInfoPatch): IUser => {
    const { id, firstName, lastName, email } = info;

    if (!id) {
      throw new Error('User must have id to update!');
    }

    if (!firstName) {
      throw new Error('User must have first name!');
    }

    if (!lastName) {
      throw new Error('User must have last name!');
    }

    if (!email) {
      throw new Error('User must have email address!');
    }

    return Object.freeze({
      getFirstName: () => firstName,
      getLastName: () => lastName,
      getEmail: () => email,
    });
  };
}
