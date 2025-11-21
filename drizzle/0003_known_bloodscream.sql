ALTER TABLE "groups" ALTER COLUMN "owner_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "participants" ADD COLUMN "viewed_at" timestamp with time zone;