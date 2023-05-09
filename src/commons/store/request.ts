import { RequestErrors } from './errors';

export interface Request {
  complete: boolean;
  failure: boolean;
  pending: boolean;
  success: boolean;
  errors: RequestErrors;
}

export enum RequestActionTypes {
  REQUEST = '@request/REQUEST',
}
