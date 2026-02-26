import { pgDb } from "@/lib/db-connect";
import { seed } from "drizzle-seed";
import * as table from "@/database/pg/tables";
import { v4 as uuidv4 } from "uuid";

async function main() {
  // 1. seed only app_users
  await seed(pgDb, { app_users: table.app_users }, { count: 10 });

  // 2. fetch the inserted user IDs
  const users = await pgDb.select({ id: table.app_users.id }).from(table.app_users);

  // 3. manually insert child tables
  await pgDb.insert(table.user_profiles).values(
    users.map((u) => ({
      id: uuidv4(),
      app_user: u.id,
      name: `User ${u.id.slice(0, 5)}`,
    }))
  );

  await pgDb.insert(table.organizations).values(
    users.map((u) => ({
      id: uuidv4(),
      created_by: u.id,
      org_name: `Org ${u.id.slice(0, 5)}`,
      org_uri: `org-${u.id.slice(0, 8)}`,
    }))
  );

  const orgs = await pgDb.select({ id: table.organizations.id }).from(table.organizations);

  await pgDb.insert(table.org_members).values(
    users.map((u, i) => ({
      id: uuidv4(),
      app_user: u.id,
      organization: orgs[i % orgs.length]!.id,
    }))
  );

  await pgDb.insert(table.org_teams).values(
    orgs.map((o) => ({
      id: uuidv4(),
      team_org: o.id,
      team_name: `Team ${o.id.slice(0, 5)}`,
    }))
  );

  console.log("✅ Seeded successfully");
}
main();