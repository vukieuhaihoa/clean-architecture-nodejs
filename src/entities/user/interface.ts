export interface IUser {
  getFirstName: () => string;
  getLastName: () => string;
  getEmail: () => string;
}

export interface IUserInfo {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IUserInfoPatch extends IUserInfo {
  id: number;
}
