export async function POST(request: Request) {
  const body = await request.json();
  const secret = process.env.SANITY_REVALIDATE_SECRET;

  if (secret && body.secret !== secret) {
    return Response.json({ message: "Invalid secret" }, { status: 401 });
  }

  if (body._type === "post") {
    const slug = body.slug?.current;
    if (slug) {
      await import("next/cache").then((cache) =>
        cache.revalidatePath(`/blog/${slug}`)
      );
    }
    await import("next/cache").then((cache) => cache.revalidatePath("/blog"));
  }

  return Response.json({ revalidated: true, now: Date.now() });
}