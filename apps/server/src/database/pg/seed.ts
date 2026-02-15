import { pgDb } from "@/lib/db-connect";
import { seed } from "drizzle-seed";
import * as tables from "@/database/pg/tables";

async function main() {
  await seed(pgDb, tables);
}
main();
