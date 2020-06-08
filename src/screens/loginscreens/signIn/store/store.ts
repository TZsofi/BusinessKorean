export interface ISignInStore {
  loggedIn: boolean;
  isRequesting: boolean;
  error: string | null;
}

export const initialSignInStore: ISignInStore = {
  loggedIn: false,
  isRequesting: false,
  error: null,
};
