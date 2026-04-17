import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Sodium Learn CMS",
  description: "Sanity Studio for Sodium Learn",
};

export const viewport: Viewport = {
  themeColor: "#2f2725",
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
