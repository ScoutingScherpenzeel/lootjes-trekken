"use client";

import { AnimatePresence, motion } from "framer-motion";
import GroupList from "./GroupList";
import type { GroupWithCount } from "./GroupCard";
import NoGroups from "./NoGroups";

type GroupsSectionProps = {
  groups: GroupWithCount[];
};

export default function GroupsSection({ groups }: GroupsSectionProps) {
  const hasGroups = groups.length > 0;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {hasGroups ? (
        <motion.div
          key="group-grid"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -24 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <GroupList groups={groups} />
        </motion.div>
      ) : (
        <motion.div
          key="no-groups"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -24 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
        >
          <NoGroups />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
