import {ISignUpStore} from './store/store';
import {IRegisterParams} from './store/actions/signUpActionInterface';

export interface ISignUpMappedProps {
  signUpStore: ISignUpStore;
  modalVisible: boolean;
}

export interface ISignUpDispatchedProps {
  updateEmail: (email: string) => void;
  updatePassword: (password: string) => void;
  updatePasswordAgain: (password: string) => void;
  registerUser: (registerParams: IRegisterParams) => void;
}

export type ISignUpProps = ISignUpMappedProps & ISignUpDispatchedProps;
