"use client";

import { enableVisualEditing } from "@sanity/visual-editing/react";
import { useEffect } from "react";

/**
 * Enable Sanity Visual Editing for this page
 * Place this component at the root of any page that should support visual editing
 */
export function VisualEditing() {
  useEffect(() => {
    enableVisualEditing();
  }, []);

  return null;
}
