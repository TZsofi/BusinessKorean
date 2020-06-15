import {
  ISignUpActionTypes,
  IUpdateEmailAction,
  IUpdatePasswordAction,
  IUpdatePasswordAgainAction,
  IRegisterUserAction,
  IRegisterParams,
} from './signUpActionInterface';

export const signUpActionTypes: ISignUpActionTypes = {
  UPDATE_EMAIL: 'UPDATE_EMAIL',
  UPDATE_PASSWORD: 'UPDATE_PASSWORD',
  UPDATE_PASSWORD_AGAIN: 'UPDATE_PASSWORD_AGAIN',
  REGISTER_USER: 'REGISTER_USER',
};

export const updateEmail = (email: string): IUpdateEmailAction => ({
  type: signUpActionTypes.UPDATE_EMAIL,
  email,
});

export const updatePassword = (password: string): IUpdatePasswordAction => ({
  type: signUpActionTypes.UPDATE_PASSWORD,
  password,
});

export const updatePasswordAgain = (
  password: string,
): IUpdatePasswordAgainAction => ({
  type: signUpActionTypes.UPDATE_PASSWORD_AGAIN,
  password,
});

export const registerUser = (
  registerParams: IRegisterParams,
): IRegisterUserAction => ({
  type: signUpActionTypes.REGISTER_USER,
  registerParams,
});
