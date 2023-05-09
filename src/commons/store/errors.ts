export type RequestErrors = {
  [key: string]: string;
};

export interface ErrorResponse {
  errors: RequestErrors;
}
