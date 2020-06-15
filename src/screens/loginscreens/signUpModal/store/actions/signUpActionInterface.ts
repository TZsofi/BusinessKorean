export interface ISignUpActionTypes {
  UPDATE_EMAIL: 'UPDATE_EMAIL';
  UPDATE_PASSWORD: 'UPDATE_PASSWORD';
  UPDATE_PASSWORD_AGAIN: 'UPDATE_PASSWORD_AGAIN';
  REGISTER_USER: 'REGISTER_USER';
}
export interface IRegisterParams {
  email: string;
  password: string;
  passwordAgain: string;
}

export interface IUpdateEmailAction {
  type: ISignUpActionTypes['UPDATE_EMAIL'];
  email: string;
}
export interface IUpdatePasswordAction {
  type: ISignUpActionTypes['UPDATE_PASSWORD'];
  password: string;
}
export interface IUpdatePasswordAgainAction {
  type: ISignUpActionTypes['UPDATE_PASSWORD_AGAIN'];
  password: string;
}
export interface IRegisterUserAction {
  type: ISignUpActionTypes['REGISTER_USER'];
  registerParams: IRegisterParams;
}

export type ISignUpActions =
  | IUpdateEmailAction
  | IUpdatePasswordAction
  | IRegisterUserAction
  | IUpdatePasswordAgainAction;
