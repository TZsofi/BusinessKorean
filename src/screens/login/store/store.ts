export interface ILoginStore {
  loggedIn: boolean;
  isRequesting: boolean;
  error: string | null;
}

export const initialLoginStore: ILoginStore = {
  loggedIn: false,
  isRequesting: false,
  error: null,
};
