import { NextRequest } from "next/server";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  draftMode().disable();
  redirect("/");
}
