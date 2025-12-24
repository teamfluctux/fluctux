import { app } from "./app";
import { Config } from "@/config";

app.listen(Config.port, () => {
  console.log(`server is listening on PORT-${Config.port}`);
});
