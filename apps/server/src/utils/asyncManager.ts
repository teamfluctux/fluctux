import type { NextFunction, Request, RequestHandler, Response } from "express";

export const asyncHandler = (requestHandlerFn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandlerFn(req, res, next)).catch((err) => next(err));
  };
};

export async function asyncResult<T>(
  fn: Promise<T>
): Promise<[T | null, unknown | null]> {
  try {
    const data = await fn;
    return [data, null];
  } catch (error: unknown) {
    return [null, error];
  }
}
