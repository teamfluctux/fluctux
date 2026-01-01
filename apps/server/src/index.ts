import { app } from "./app";
import { BaseConfig } from "@/config";

app.listen(BaseConfig.port, () => {
  console.log(`server is listening on PORT-${BaseConfig.port}`);
});
