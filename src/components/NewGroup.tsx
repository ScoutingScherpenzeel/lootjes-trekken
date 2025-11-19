"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import CreateGroupModal from "./CreateGroupModal";
import { Button } from "./ui/button";
import { createGroup } from "@/actions/groupsAction";

type CreateGroupFormValues = {
    name: string;
    description?: string;
    event_date?: string;
};

export default function NewGroup() {
    const router = useRouter();
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isCreating, startTransition] = useTransition();

    const createGroupHandler = (data: CreateGroupFormValues) => {

        setErrorMessage(null);

        // Run the server action without blocking UI updates.
        startTransition(() => {
            createGroup({
                name: data.name,
            })
                .then(() => {
                    setShowCreateModal(false);
                    router.refresh();
                })
                .catch((error) => {
                    console.error("Failed to create group", error);
                    setErrorMessage("Er ging iets mis bij het aanmaken van je groep.");
                });
        });
    };

    return (
        <>
            <Button
                onClick={() => setShowCreateModal(true)}
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-black uppercase border-4 border-black h-16 px-8 text-lg transform hover:translate-x-1 hover:translate-y-1 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] disabled:opacity-70 disabled:cursor-not-allowed"
            >
                <Plus className="w-6 h-6 mr-2" />
                Nieuwe trekking
            </Button>

            <CreateGroupModal
                open={showCreateModal}
                onClose={(nextOpen) => {
                    setShowCreateModal(nextOpen);
                    if (!nextOpen) {
                        setErrorMessage(null);
                    }
                }}
                onSubmit={createGroupHandler}
                isLoading={isCreating}
            />

            {errorMessage ? (
                <p className="mt-4 text-sm font-semibold text-red-600">{errorMessage}</p>
            ) : null}
        </>
    );
}