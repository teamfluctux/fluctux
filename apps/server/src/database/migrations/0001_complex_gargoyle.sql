CREATE TYPE "public"."user_account_provider_enum" AS ENUM('GOOGLE', 'GITHUB', 'DISCORD', 'MANUAL');--> statement-breakpoint
CREATE TYPE "public"."user_account_status_enum" AS ENUM('NORMAL', 'SUSPENDED', 'RESTRICTED');--> statement-breakpoint
ALTER TABLE "app_user" ALTER COLUMN "avatar" SET DATA TYPE varchar(500);--> statement-breakpoint
ALTER TABLE "app_user" ALTER COLUMN "cover_img" SET DATA TYPE varchar(500);--> statement-breakpoint
ALTER TABLE "app_user" ADD COLUMN "username" varchar(30) NOT NULL;--> statement-breakpoint
ALTER TABLE "app_user" ADD COLUMN "password" varchar(30) NOT NULL;--> statement-breakpoint
ALTER TABLE "app_user" ADD COLUMN "account_provider" "user_account_provider_enum" DEFAULT 'MANUAL' NOT NULL;--> statement-breakpoint
ALTER TABLE "app_user" ADD COLUMN "account_status" "user_account_status_enum" DEFAULT 'NORMAL';--> statement-breakpoint
ALTER TABLE "app_user" ADD COLUMN "is_verified" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "app_user" ADD COLUMN "verify_code" varchar(8);--> statement-breakpoint
ALTER TABLE "app_user" ADD COLUMN "verify_expiry" timestamp;--> statement-breakpoint
ALTER TABLE "app_user" ADD COLUMN "updated_at" timestamp;--> statement-breakpoint
ALTER TABLE "app_user" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "app_user" ADD COLUMN "deleted_at" timestamp;--> statement-breakpoint
ALTER TABLE "app_user" ADD CONSTRAINT "app_user_username_unique" UNIQUE("username");