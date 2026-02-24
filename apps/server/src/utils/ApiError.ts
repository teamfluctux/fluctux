import { type ApiErrorType } from "@fluctux/types";
import { type ERROR } from "@/constants/http-status"

export class ApiError extends Error implements ApiErrorType {
  public success?: boolean;
  public status: number
  constructor(
    public error: (typeof ERROR)[keyof typeof ERROR],
    override stack?: string,
  ) {
    super(error.message);
    this.status = error.status;
    this.success = false;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
