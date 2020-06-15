export interface ISignUpStore {
  loggedIn: boolean;
  isRequesting: boolean;
  error: string | null;
  email: string;
  password: string;
  passwordAgain: string;
}

export const initialSignUpStore: ISignUpStore = {
  loggedIn: false,
  isRequesting: false,
  error: null,
  email: '',
  password: '',
  passwordAgain: '',
};
