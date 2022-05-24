import {
  EMAIL_NEED,
  FIRST_NAME_NEED,
  LAST_NAME_NEED,
} from '@src/utils/validator/const';
import makeFakeUser from '@src/__tests__/fixtures/user';
import { makeUser } from '.';

describe('makeUser', () => {
  it('all field invalid', () => {
    const errorMessage = [FIRST_NAME_NEED, LAST_NAME_NEED, EMAIL_NEED].join(
      '\n'
    );
    const user = makeFakeUser({ firstName: null, lastName: null, email: null });
    expect(() => makeUser(user)).toThrow(errorMessage);
  });

  it('must have first name', () => {
    const user = makeFakeUser({ firstName: null });
    expect(() => makeUser(user)).toThrow(FIRST_NAME_NEED);
  });

  it('must have last name', () => {
    const user = makeFakeUser({ lastName: null });
    expect(() => makeUser(user)).toThrow(LAST_NAME_NEED);
  });

  it('must have email address', () => {
    const user = makeFakeUser({ email: null });
    expect(() => makeUser(user)).toThrow(EMAIL_NEED);
  });

  it('success', () => {
    const userFake = makeFakeUser({});
    const user = makeUser(userFake);
    expect(user.getFirstName()).toEqual(userFake.firstName);
    expect(user.getLastName()).toEqual(userFake.lastName);
    expect(user.getEmail()).toEqual(userFake.email);
  });
});
