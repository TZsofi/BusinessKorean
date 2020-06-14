import {ISignInStore} from './store/store';

export interface ISignInMappedProps {
  signInStore: ISignInStore;
  modalVisible: boolean;
}

export interface ISignInDispatchedProps {
  updateEmail: (email: string) => void;
  updatePassword: (password: string) => void;
}

export type ISignInProps = ISignInMappedProps & ISignInDispatchedProps;
