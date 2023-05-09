import { StoreActionTypes } from "./storeActionTypes";

export interface Action {
  type: StoreActionTypes;
  payload?: any;
}
