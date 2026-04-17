import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt: string;
  category?: string;
  publishedAt?: string;
  author?: { name: string };
  className?: string;
}

export function BlogCard({
  title,
  slug,
  excerpt,
  category,
  publishedAt,
  author,
  className,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className={cn("group block h-full", className)}>
      <article className="flex h-full flex-col rounded-lg border border-border-subtle bg-bg-white p-md shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-px">
        {category && (
          <Badge className="mb-xs">{category}</Badge>
        )}
        <h3 className="text-h4 font-medium text-text-primary group-hover:text-action-primary transition-colors">
          {title}
        </h3>
        <p className="mt-xs text-body-sm text-text-secondary line-clamp-2">
          {excerpt}
        </p>
        <div className="mt-auto pt-md flex items-center gap-xs text-label-sm text-text-secondary">
          {author && <span>{author.name}</span>}
          {author && publishedAt && <span>·</span>}
          {publishedAt && (
            <time dateTime={publishedAt}>
              {new Date(publishedAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
          )}
        </div>
      </article>
    </Link>
  );
}