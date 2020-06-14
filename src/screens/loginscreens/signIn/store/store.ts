export interface ISignInStore {
  loggedIn: boolean;
  isRequesting: boolean;
  error: string | null;
  email: string;
  password: string;
}

export const initialSignInStore: ISignInStore = {
  loggedIn: false,
  isRequesting: false,
  error: null,
  email: 'cr',
  password: '',
};
