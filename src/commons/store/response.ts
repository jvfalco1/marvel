import { RequestErrors } from './errors';

export interface Response<T> {
  data: T;
  errors: RequestErrors;
}

export interface ApiListResponse<T> extends Response<T[]> {
  page: number;
  total: number;
  limit: number;
}
