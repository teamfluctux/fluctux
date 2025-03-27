import { ApiResponseType } from "@fluctux/types";

export class ApiResponse implements ApiResponseType {
  status: number;
  message: string;
  data: unknown;
  success: boolean;

  constructor(
    status: number,
    message: string,
    data: unknown,
    success: boolean = status < 400
  ) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.success = success;
  }
}
