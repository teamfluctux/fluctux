import { type ApiResponseType } from "@fluctux/types";

export class ApiResponse implements ApiResponseType {
  constructor(
    public status: number,
    public message: string,
    public data: unknown = null,
    public success: boolean = status < 400
  ) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.success = success;
  }
}
