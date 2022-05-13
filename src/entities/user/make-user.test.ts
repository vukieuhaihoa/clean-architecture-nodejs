import makeFakeUser from '@src/__tests__/fixtures/user';
import { makeUser } from '.';

describe('user', () => {
  it('must have first name', () => {
    const user = makeFakeUser({ firstName: null });
    expect(() => makeUser(user)).toThrow('User must have first name!');
  });

  it('must have last name', () => {
    const user = makeFakeUser({ lastName: null });
    expect(() => makeUser(user)).toThrow('User must have last name!');
  });

  it('must have email address', () => {
    const user = makeFakeUser({ email: null });
    expect(() => makeUser(user)).toThrow('User must have email address!');
  });

  it('success', () => {
    const userFake = makeFakeUser({});
    const user = makeUser(userFake);
    expect(user.getFirstName()).toEqual(userFake.firstName);
    expect(user.getLastName()).toEqual(userFake.lastName);
    expect(user.getEmail()).toEqual(userFake.email);
  });
});
