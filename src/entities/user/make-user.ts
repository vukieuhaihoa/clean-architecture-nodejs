import { IUser, IUserInfo } from './interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function buildMakeUser(userValidator: any) {
  return (info: IUserInfo): IUser => {
    const { firstName, lastName, email } = info;

    // if (!firstName) {
    //   throw new Error('User must have first name!');
    // }

    // if (!lastName) {
    //   throw new Error('User must have last name!');
    // }

    // if (!email) {
    //   throw new Error('User must have email address!');
    // }

    const { error } = userValidator({ firstName, lastName, email });

    // console.log({ error });

    if (error) throw new Error(error);

    return Object.freeze({
      getFirstName: () => firstName,
      getLastName: () => lastName,
      getEmail: () => email,
    });
  };
}
