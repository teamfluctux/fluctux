
import { BaseConfig } from "@/config"
import { ERROR } from "@/constants/http-status"
import { ApiError } from "@/utils"
import type { ApiErrorType } from "@fluctux/types"

import type { NextFunction, Request, Response } from "express"

export const errorHandlerMiddleware = (err: Error | ApiError, req: Request, res: Response, next: NextFunction) => {
    let error = err

    if (!(error instanceof ApiError)) {
        const message = error.message || "Something went wrong"
        error = new ApiError({ ...ERROR.INTERNAL_SERVER_ERROR, message }, error.stack)
    }

    const status = error instanceof ApiError ? error.status : 500
    const response: ApiErrorType = {
        ...(error instanceof ApiError && error.error) as (typeof ERROR)[keyof typeof ERROR],
        ...(BaseConfig.NODE_ENV === "development" ? { stack: error.stack } : {})
    }

    res.status(status).json(response)
}