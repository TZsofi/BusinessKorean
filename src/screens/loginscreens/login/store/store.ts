export interface ILoginStore {
  loggedIn: boolean;
  loading: boolean;
  signUpVisible: boolean;
  signInVisible: boolean;
  email: string;
  password: string;
  passwordAgain: string;
}

export const initialLoginStore: ILoginStore = {
  loggedIn: false,
  loading: false,
  signInVisible: false,
  signUpVisible: false,
  email: '',
  password: '',
  passwordAgain: '',
};
