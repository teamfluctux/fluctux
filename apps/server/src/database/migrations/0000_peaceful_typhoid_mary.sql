CREATE TABLE "app_user" (
	"user_id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"avatar" varchar,
	"cover_img" varchar,
	"email" varchar(100) NOT NULL,
	CONSTRAINT "app_user_user_id_unique" UNIQUE("user_id"),
	CONSTRAINT "app_user_email_unique" UNIQUE("email")
);
