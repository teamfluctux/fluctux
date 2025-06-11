export interface ApiResponseType {
  status: number;
  message: string;
  data?: unknown | null;
  success?: boolean;
}

export interface ApiErrorType {
  status: number;
  success?: boolean;
  message: string;
  stack?: string;
  errors?: unknown[];
}
