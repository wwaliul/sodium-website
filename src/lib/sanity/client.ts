import { createClient, type SanityClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

if (!projectId) {
  console.warn("Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable");
}

function createSanityClient(options: { useCdn: boolean; token?: string; perspective?: string }) {
  if (!projectId) {
    return null;
  }
  return createClient({
    projectId,
    dataset,
    apiVersion: "2024-01-01",
    useCdn: options.useCdn,
    token: options.token,
    perspective: options.perspective as undefined | "previewDrafts",
  });
}

export const client = createSanityClient({ useCdn: true });

export const serverClient = createSanityClient({
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
    return createSanityClient({
      useCdn: false,
      token: process.env.SANITY_API_TOKEN,
      perspective: "previewDrafts",
    }) as SanityClient;
  }

  return client;
}

const builder = projectId && client ? createImageUrlBuilder(client) : null;

export function urlFor(source: Parameters<ReturnType<typeof createImageUrlBuilder>["image"]>[0]) {
  if (!builder || !client) {
    return { url: () => "" };
  }
  return builder.image(source);
}
