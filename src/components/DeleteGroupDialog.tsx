"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

export type DeleteGroupDialogProps = {
  groupName: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  isLoading?: boolean;
  error?: string | null;
};

export default function DeleteGroupDialog({
  groupName,
  open,
  onOpenChange,
  onConfirm,
  isLoading = false,
  error,
}: DeleteGroupDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] border-8 border-black bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-0">
        <DialogHeader className="bg-black text-white p-6 border-b-8 border-white">
          <DialogTitle className="text-2xl font-black uppercase tracking-tight">
            Trekking verwijderen
          </DialogTitle>
          <DialogDescription className="text-white/80 font-bold text-base">
            Weet je zeker dat je &ldquo;{groupName}&rdquo; wil verwijderen?
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 p-6 text-sm font-semibold">
          <p className="text-black">
            Deze actie verwijdert ook alle deelnemers en kan niet ongedaan worden gemaakt.
          </p>
          {error ? <p className="text-red-600">{error}</p> : null}
        </div>
        <DialogFooter className="p-6 pt-0 gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isLoading}
            className="flex-1 border-4 border-black font-black uppercase h-14 hover:bg-black hover:text-white"
          >
            Annuleren
          </Button>
          <Button
            type="button"
            onClick={onConfirm}
            disabled={isLoading}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-black uppercase border-4 border-black h-14 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Bezig...
              </>
            ) : (
              "Verwijderen"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
