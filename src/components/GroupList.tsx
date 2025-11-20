"use client";

import { AnimatePresence } from "framer-motion";
import GroupCard, { type GroupWithCount } from "./GroupCard";

type GroupListProps = {
  groups: GroupWithCount[];
};

export default function GroupList({ groups }: GroupListProps) {
  return (
    <AnimatePresence>
      {groups.map((group, index) => (
        <GroupCard
          key={group.id}
          group={group}
          participantCount={group.participantCount ?? 0}
          index={index}
        />
      ))}
    </AnimatePresence>
  );
}
