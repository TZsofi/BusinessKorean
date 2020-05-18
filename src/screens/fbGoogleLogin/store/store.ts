export interface IFbGoogleLoginStore {
  loggedIn: boolean;
  isRequesting: boolean;
  error: string | null;
}

export const initialFbGoogleLoginStore: IFbGoogleLoginStore = {
  loggedIn: false,
  isRequesting: false,
  error: null,
};
