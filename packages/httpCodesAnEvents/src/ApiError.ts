import { ApiErrorType } from "@fluctux/types"

export class ApiError extends Error implements ApiErrorType {
  status: number;
  success: boolean;
  errors: unknown[];
  message: string;
  stack?: string | undefined;

  constructor(
    status: number,
    message: string = "Something went wrong",
    success: boolean = false,
    stack: string = "",
    errors: unknown[] = []
  ) {
    super(message);
    this.status = status;
    this.success = success;
    this.message = message;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
