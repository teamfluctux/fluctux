ALTER TABLE "app_user" DROP CONSTRAINT "app_user_user_id_unique";--> statement-breakpoint
CREATE INDEX "username_index" ON "app_user" USING btree ("username");--> statement-breakpoint
ALTER TABLE "app_user" ADD CONSTRAINT "user_id_unique" UNIQUE("user_id");