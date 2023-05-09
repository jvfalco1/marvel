import { Method } from "axios";
import { StoreActionTypes } from "./storeActionTypes";
import { Action } from "./action";

export interface ReducerAction extends Action {
  action: StoreActionTypes;
  method: Method;
  url: string;
}
