export interface ILoginStore {
  loggedIn: boolean;
  isRequesting: boolean;
  error: string | null;
  signUpVisible: boolean;
  signInVisible: boolean;
}

export const initialLoginStore: ILoginStore = {
  loggedIn: false,
  isRequesting: false,
  error: null,
  signInVisible: false,
  signUpVisible: false,
};
