import { cn } from "@/lib/utils";

/** Figma: Section label – "01 SECTION NAME" (Barlow Condensed 28px, number muted) */
type NumberedHeadingProps = {
  number: string;
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function NumberedHeading({
  number,
  children,
  className,
  as: Tag = "h2",
}: NumberedHeadingProps) {
  return (
    <Tag
      className={cn(
        "text-heading-xs flex items-center gap-400 uppercase tracking-(--text-heading-xs-letter-spacing) text-white",
        className
      )}
    >
      <span className="font-bold tabular-nums opacity-25" aria-hidden>
        {number}
      </span>
      <span>{children}</span>
    </Tag>
  );
}
