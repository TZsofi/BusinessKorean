import {IHomeStore} from './store/store';

export interface IHomeMappedProps {
  homeStore: IHomeStore;
}

export interface IHomeDispatchedProps {}

export type IHomeProps = IHomeMappedProps & IHomeDispatchedProps;
