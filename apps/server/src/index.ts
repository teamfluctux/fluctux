import { app } from "./app";
import { BaseConfig } from "@/config";

app.listen(BaseConfig.PORT, () => {
  console.log(`server is listening on PORT-${BaseConfig.PORT}`);
});
