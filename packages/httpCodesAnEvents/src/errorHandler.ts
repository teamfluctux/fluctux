import { ERROR, ErrorCodes, HTTPErrorCodes } from "./error";
import {ApiError} from "./ApiError";

export const unauthorizedError = () => {
  return {
    error: JSON.parse(
      JSON.stringify(
        new ApiError(
          HTTPErrorCodes.UNAUTHORIZED,
          ErrorCodes.UNAUTHORIZED_USER,
          false,
          "",
          [ERROR.UNAUTHORIZED_USER]
        )
      )
    ),
  };
};

export const internalServerError = () => {
  return {
    error: JSON.parse(
      JSON.stringify(
        new ApiError(
          HTTPErrorCodes.INTERNAL_SERVER_ERROR,
          ErrorCodes.INTERNAL_SERVER_ERROR,
          false,
          "",
          [ERROR.INTERNAL_SERVER_ERROR]
        )
      )
    ),
  };
};
