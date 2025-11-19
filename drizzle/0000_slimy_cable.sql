CREATE TABLE "groups" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"admin_token" varchar(32) NOT NULL,
	"is_drawn" boolean DEFAULT false NOT NULL,
	"drawn_at" timestamp with time zone DEFAULT now(),
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "groups_admin_token_unique" UNIQUE("admin_token")
);
--> statement-breakpoint
CREATE TABLE "participants" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"group_id" uuid NOT NULL,
	"name" varchar(255) NOT NULL,
	"view_token" varchar(32) NOT NULL,
	"assigned_participant_id" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "participants_view_token_unique" UNIQUE("view_token")
);
--> statement-breakpoint
ALTER TABLE "participants" ADD CONSTRAINT "participants_group_id_groups_id_fk" FOREIGN KEY ("group_id") REFERENCES "public"."groups"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "participants" ADD CONSTRAINT "participants_assigned_participant_id_participants_id_fk" FOREIGN KEY ("assigned_participant_id") REFERENCES "public"."participants"("id") ON DELETE set null ON UPDATE no action;