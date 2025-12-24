import { KanbanKafkaService } from "@/services/kafka";
import { Router } from "express";

const kanbanRouter = Router();

const kanbanKafkaService = new KanbanKafkaService();

kanbanRouter
  .route("/create-kanban")
  .post(kanbanKafkaService.createTopic.bind(kanbanKafkaService));

export default kanbanRouter;
