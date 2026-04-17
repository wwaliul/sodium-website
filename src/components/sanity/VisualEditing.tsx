"use client";

import { VisualEditing } from "@sanity/visual-editing/react";

/**
 * Enable Sanity Visual Editing for this page
 * Place this component at the root of any page that should support visual editing
 */
export function SanityVisualEditing() {
  return <VisualEditing portal />;
}
