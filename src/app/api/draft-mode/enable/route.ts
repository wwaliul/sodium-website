import { NextRequest } from "next/server";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { client } from "@/lib/sanity/client";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (!token) {
    return new Response("Missing token", { status: 400 });
  }

  // Validate the token
  try {
    await client.withConfig({ token }).fetch('*[_type == "siteSettings"][0]');
  } catch (e) {
    return new Response("Invalid token", { status: 401 });
  }

  // Enable draft mode and set the token
  draftMode().enable();
  document.cookie = `sanity-token=${token}; Path=/; SameSite=Lax`;

  // Redirect to the page the user came from
  const redirectUrl = searchParams.get("redirect") || "/";
  redirect(redirectUrl);
}
