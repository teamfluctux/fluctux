import { BaseConfig } from "@/config";
import { ERROR } from "@/constants/http-status";
import { ApiError } from "@/utils";
import type { ApiErrorType } from "@fluctux/types";

import type { NextFunction, Request, Response } from "express";

export const errorHandlerMiddleware = (
  err: Error | ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error: ApiError;

  if (err instanceof ApiError) {
    error = err;
  } else {
    const message = err.message || "Something went wrong";
    error = new ApiError(
      { ...ERROR.INTERNAL_SERVER_ERROR, message },
      err.stack
    );
  }

  const status = error.status;
  const response: ApiErrorType = {
    ...error.error,
    ...(BaseConfig.NODE_ENV === "development" ? { stack: error.stack } : {}),
  };

  res.status(status).json(response);
};
