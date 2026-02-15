CREATE TYPE "public"."user_account_provider_enum" AS ENUM('GOOGLE', 'GITHUB', 'DISCORD', 'MANUAL');--> statement-breakpoint
CREATE TYPE "public"."user_account_status_enum" AS ENUM('NORMAL', 'SUSPENDED', 'RESTRICTED');--> statement-breakpoint
CREATE TYPE "public"."org_status_enum" AS ENUM('NORMAL', 'SUSPENDED', 'RESTRICTED');--> statement-breakpoint
CREATE TYPE "public"."org_visibility_enum" AS ENUM('PUBLIC', 'PRIVATE', 'CONNECTIONS', 'CUSTOM');--> statement-breakpoint
CREATE TYPE "public"."org_team_visibility_enum" AS ENUM('PUBLIC', 'PRIVATE');--> statement-breakpoint
CREATE TABLE "app_user" (
	"user_id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"avatar" varchar(500),
	"cover_img" varchar(500),
	"email" varchar(100) NOT NULL,
	"username" varchar(30) NOT NULL,
	"password" varchar(30) NOT NULL,
	"account_provider" "user_account_provider_enum" DEFAULT 'MANUAL' NOT NULL,
	"account_status" "user_account_status_enum" DEFAULT 'NORMAL',
	"is_verified" boolean DEFAULT false NOT NULL,
	"verify_code" varchar(8),
	"verify_expiry" timestamp,
	"is_deleted" boolean DEFAULT false NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "user_id_unique" UNIQUE("user_id"),
	CONSTRAINT "app_user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "org_teams" (
	"team_id" uuid PRIMARY KEY NOT NULL,
	"team_org" uuid NOT NULL,
	"team_name" varchar(200) NOT NULL,
	"team_desc" varchar(500),
	"team_avatar" varchar(500),
	"team_cover_img" varchar(500),
	"team_category" varchar(200),
	"is_hidden" boolean,
	"team_visibility" "org_team_visibility_enum" DEFAULT 'PUBLIC' NOT NULL,
	"is_deleted" boolean DEFAULT false NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "org_teams_team_id_unique" UNIQUE("team_id")
);
--> statement-breakpoint
CREATE TABLE "organization" (
	"org_id" uuid PRIMARY KEY NOT NULL,
	"admin" uuid NOT NULL,
	"org_avatar" varchar(500),
	"org_cover_img" varchar(500),
	"org_name" varchar(200) NOT NULL,
	"org_uri" varchar(300) NOT NULL,
	"org_desc" varchar(1000),
	"org_visibility" "org_visibility_enum" DEFAULT 'PRIVATE' NOT NULL,
	"is_hidden" boolean DEFAULT true NOT NULL,
	"tags" varchar(100)[],
	"category" varchar(200),
	"country" varchar(200),
	"org_status" "org_status_enum" DEFAULT 'NORMAL' NOT NULL,
	"is_verified" boolean DEFAULT false NOT NULL,
	"is_deleted" boolean DEFAULT false NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "organization_org_id_unique" UNIQUE("org_id")
);
--> statement-breakpoint
ALTER TABLE "org_teams" ADD CONSTRAINT "org_teams_team_org_organization_org_id_fk" FOREIGN KEY ("team_org") REFERENCES "public"."organization"("org_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "organization" ADD CONSTRAINT "organization_admin_app_user_user_id_fk" FOREIGN KEY ("admin") REFERENCES "public"."app_user"("user_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "username_index" ON "app_user" USING btree ("username");--> statement-breakpoint
CREATE UNIQUE INDEX "org_uri_unique_index" ON "organization" USING btree ("org_uri");