import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export const serverClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

/**
 * Get a Sanity client with draft mode enabled
 * Use this in Server Components for live preview
 */
export async function getDraftClient() {
  const { draftMode } = await import("next/headers");
  const draft = await draftMode();

  if (draft.isEnabled) {
    return createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
      apiVersion: "2024-01-01",
      useCdn: false,
      token: process.env.SANITY_API_TOKEN,
      perspective: "previewDrafts",
    });
  }

  return client;
}

const builder = createImageUrlBuilder(client);

export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
