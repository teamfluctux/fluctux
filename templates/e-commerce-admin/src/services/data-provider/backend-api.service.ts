import { ApiService } from "@fluctux/service";

export abstract class BackendApiService extends ApiService {
  constructor() {
    super(process.env.BACKEND_API_BASE_URI!);
  }
}
