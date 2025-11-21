"use client";

import { useEffect } from "react";

export default function HideFooterOnMount() {
  useEffect(() => {
    const previousValue = document.body.dataset.hideFooter;
    document.body.dataset.hideFooter = "true";

    return () => {
      if (previousValue !== undefined) {
        document.body.dataset.hideFooter = previousValue;
      } else {
        delete document.body.dataset.hideFooter;
      }
    };
  }, []);

  return null;
}
