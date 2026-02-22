CREATE TYPE "public"."org_status_enum" AS ENUM('NORMAL', 'SUSPENDED', 'RESTRICTED');--> statement-breakpoint
CREATE TYPE "public"."org_visibility_enum" AS ENUM('PUBLIC', 'PRIVATE', 'CONNECTIONS', 'CUSTOM');--> statement-breakpoint
CREATE TYPE "public"."org_team_visibility_enum" AS ENUM('PUBLIC', 'PRIVATE');--> statement-breakpoint
CREATE TYPE "public"."tm_status_enm" AS ENUM('DRAFT', 'PUBLISHED');--> statement-breakpoint
CREATE TYPE "public"."org_member_role_enum" AS ENUM('FOLLOWER', 'MANAGER', 'CONTRIBUTOR', 'ADMIN');--> statement-breakpoint
CREATE TYPE "public"."org_member_status_enum" AS ENUM('NOMRAL', 'RESTRICTED', 'BLOCKED', 'PENDING', 'REJECTED');--> statement-breakpoint
CREATE TYPE "public"."user_account_provider_enum" AS ENUM('GOOGLE', 'GITHUB', 'DISCORD', 'MANUAL');--> statement-breakpoint
CREATE TYPE "public"."user_account_status_enum" AS ENUM('NORMAL', 'SUSPENDED', 'RESTRICTED');--> statement-breakpoint
CREATE TABLE "organizations" (
	"_id" uuid PRIMARY KEY NOT NULL,
	"created_by" uuid NOT NULL,
	"org_name" varchar(100) NOT NULL,
	"org_desc" varchar(500),
	"org_uri" varchar(100) NOT NULL,
	"org_avatar" text,
	"org_cover_img" text,
	"category" varchar(50),
	"tags" varchar(30)[],
	"org_visibility" "org_visibility_enum" DEFAULT 'PRIVATE' NOT NULL,
	"org_status" "org_status_enum" DEFAULT 'NORMAL' NOT NULL,
	"is_verified" boolean DEFAULT false NOT NULL,
	"is_hidden" boolean DEFAULT true NOT NULL,
	"is_deleted" boolean DEFAULT false NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "organizations__id_unique" UNIQUE("_id"),
	CONSTRAINT "chk_org_av_c_len" CHECK (LENGTH("organizations"."org_avatar") < 300),
	CONSTRAINT "chk_org_cvi_c_len" CHECK (LENGTH("organizations"."org_cover_img") < 300)
);
--> statement-breakpoint
CREATE TABLE "org_teams" (
	"_id" uuid PRIMARY KEY NOT NULL,
	"team_org" uuid NOT NULL,
	"team_name" varchar(200) NOT NULL,
	"team_desc" varchar(500),
	"team_avatar" text,
	"team_cover_img" text,
	"team_category" varchar(50),
	"team_visibility" "org_team_visibility_enum" DEFAULT 'PUBLIC' NOT NULL,
	"team_status" "tm_status_enm" DEFAULT 'PUBLISHED' NOT NULL,
	"is_hidden" boolean DEFAULT false NOT NULL,
	"is_deleted" boolean DEFAULT false NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "org_teams__id_unique" UNIQUE("_id")
);
--> statement-breakpoint
CREATE TABLE "org_members" (
	"_id" uuid PRIMARY KEY NOT NULL,
	"user" uuid NOT NULL,
	"organization" uuid NOT NULL,
	"memb_role" "org_member_role_enum" DEFAULT 'FOLLOWER' NOT NULL,
	"memb_status" "org_member_status_enum" DEFAULT 'NOMRAL' NOT NULL,
	"is_deleted" boolean DEFAULT false NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "app_users" (
	"_id" uuid PRIMARY KEY NOT NULL,
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
	CONSTRAINT "user_id_unique" UNIQUE("_id"),
	CONSTRAINT "app_users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "user_addresses" (
	"_id" uuid PRIMARY KEY NOT NULL,
	"user" uuid,
	"country" varchar(100),
	"city" varchar(100),
	"street_address" text,
	"state" varchar(50),
	"zip_code" varchar(10),
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "user_addresses__id_unique" UNIQUE("_id"),
	CONSTRAINT "chk_straddr_c_len" CHECK (LENGTH("user_addresses"."street_address") < 601)
);
--> statement-breakpoint
CREATE TABLE "user_contacts" (
	"_id" uuid PRIMARY KEY NOT NULL,
	"user" uuid,
	"number" varchar(20)[],
	"email" varchar(80)[],
	"links" text[],
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "user_contacts__id_unique" UNIQUE("_id"),
	CONSTRAINT "chk_number_len" CHECK (array_length("user_contacts"."number", 1) <= 3),
	CONSTRAINT "chk_email_len" CHECK (array_length("user_contacts"."email", 1) <= 3),
	CONSTRAINT "chk_links_len" CHECK (array_length("user_contacts"."links", 1) <= 3)
);
--> statement-breakpoint
CREATE TABLE "user_profiles" (
	"_id" uuid PRIMARY KEY NOT NULL,
	"user" uuid NOT NULL,
	"name" varchar(50) NOT NULL,
	"avatar" text,
	"cover_img" text,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "user_profiles__id_unique" UNIQUE("_id"),
	CONSTRAINT "chk_usr_av_c_len" CHECK (LENGTH("user_profiles"."avatar") < 300),
	CONSTRAINT "chk_usr_cvi_c_len" CHECK (LENGTH("user_profiles"."cover_img") < 300)
);
--> statement-breakpoint
ALTER TABLE "organizations" ADD CONSTRAINT "organizations_created_by_app_users__id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."app_users"("_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "org_teams" ADD CONSTRAINT "org_teams_team_org_organizations__id_fk" FOREIGN KEY ("team_org") REFERENCES "public"."organizations"("_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "org_members" ADD CONSTRAINT "org_members_user_app_users__id_fk" FOREIGN KEY ("user") REFERENCES "public"."app_users"("_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "org_members" ADD CONSTRAINT "org_members_organization_organizations__id_fk" FOREIGN KEY ("organization") REFERENCES "public"."organizations"("_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_addresses" ADD CONSTRAINT "user_addresses_user_app_users__id_fk" FOREIGN KEY ("user") REFERENCES "public"."app_users"("_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_contacts" ADD CONSTRAINT "user_contacts_user_app_users__id_fk" FOREIGN KEY ("user") REFERENCES "public"."app_users"("_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_profiles" ADD CONSTRAINT "user_profiles_user_app_users__id_fk" FOREIGN KEY ("user") REFERENCES "public"."app_users"("_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "unq_org_uri_i" ON "organizations" USING btree ("org_uri");--> statement-breakpoint
CREATE UNIQUE INDEX "unq_usr_uname_i" ON "app_users" USING btree ("username");