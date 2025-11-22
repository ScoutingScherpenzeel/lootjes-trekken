"use server";

import { getGroupsForUser } from "@/actions/groupsAction";
import Hero from "@/components/Hero";
import NewGroup from "@/components/NewGroup";
import GroupsSection from "@/components/GroupsSection";
import LoggedOutCallToAction from "@/components/LoggedOutCallToAction";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Home() {

  const session = await auth.api.getSession({
    headers: await headers()
  })

  // get all groups from drizzle
  const groups = session ? await getGroupsForUser(session.user.id) : [];

  return (
    <div className="">
      <Hero name={session?.user.name} />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {session ? (
          <>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-2 h-full bg-red-600" />
                <h2>Mijn trekkingen</h2>
                <div className="mt-2 w-32 h-2 bg-yellow-400" />
              </div>
              <NewGroup />
            </div>

            <GroupsSection groups={groups} />
          </>
        ) : (
          <LoggedOutCallToAction />
        )}
      </div>
    </div>
  );
}
