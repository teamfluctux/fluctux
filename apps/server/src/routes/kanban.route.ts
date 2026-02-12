import { KanbanKafkaService } from "@/services/kafka";
import { Router } from "express";

const kanbanRouter: Router = Router();

const kanbanKafkaService = new KanbanKafkaService();

// =============== VERSION: v1 ===================
kanbanRouter
  .route("/v1/create-kanban")
  .post(kanbanKafkaService.createTopic.bind(kanbanKafkaService));

export default kanbanRouter;
