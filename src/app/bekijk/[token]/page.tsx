import DeelnemerView, {
  type ParticipantRevealViewProps,
} from "@/components/DeelnemerView";
import { db } from "@/db";
import { participants } from "@/db/schema/schema";
import { eq } from "drizzle-orm";

export const revalidate = 0;
export const dynamic = "force-dynamic";

type PageProps = {
  params: {
    token: string;
  };
};

type ParticipantRevealRecord = Awaited<ReturnType<typeof getParticipantReveal>>;

async function getParticipantReveal(token: string) {
  if (!token) {
    return null;
  }

  return db.query.participants.findFirst({
    where: eq(participants.viewToken, token),
    columns: {
      id: true,
      name: true,
      createdAt: true,
    },
    with: {
      group: {
        columns: {
          id: true,
          name: true,
          isDrawn: true,
          drawnAt: true,
        },
      },
      assignedParticipant: {
        columns: {
          id: true,
          name: true,
        },
      },
    },
  });
}

function toViewProps(record: ParticipantRevealRecord): ParticipantRevealViewProps {
  if (!record) {
    return { status: "invalid" };
  }

  const groupName = record.group?.name ?? null;
  const isDrawn = record.group?.isDrawn ?? false;

  if (!isDrawn || !record.assignedParticipant) {
    return {
      status: "not-drawn",
      participantName: record.name,
      groupName,
    };
  }

  return {
    status: "ready",
    participantName: record.name,
    assignedParticipantName: record.assignedParticipant.name,
    groupName,
  };
}

export default async function ParticipantRevealPage({ params }: PageProps) {
const {token} = await params;
  const record = await getParticipantReveal(token);
  const viewProps = toViewProps(record);

  return <DeelnemerView {...viewProps} />;
}
