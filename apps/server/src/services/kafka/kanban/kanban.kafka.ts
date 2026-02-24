import { ApiResponse } from "@/utils/ApiResponse";
import { KafkaService } from "../kafka";
import type { Request, Response } from "express";
import { ERROR, HTTPErrorCodes } from "@/constants/http-status";
import { ApiError } from "@/utils/ApiError";

export class KanbanKafkaService extends KafkaService {
  async createTopic(req: Request, res: Response) {
    try {
      await this.init();
      // should be in controller not service | currently for testing
      res
        .status(201)
        .json({ message: new ApiResponse(201, "Kafka topic created") });
    } catch (error) {
       throw new ApiError(ERROR.UNAUTHORIZED_USER)
    }
  }
}
