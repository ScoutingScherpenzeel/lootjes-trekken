ALTER TABLE "groups" DROP CONSTRAINT "groups_admin_token_unique";--> statement-breakpoint
ALTER TABLE "groups" ADD COLUMN "owner_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "groups" ADD CONSTRAINT "groups_owner_id_user_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "groups" DROP COLUMN "admin_token";