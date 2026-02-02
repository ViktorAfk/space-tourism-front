import { cn } from "@/lib/utils";

/** Figma: dot indicators for destination/crew/tech tabs */
type DotIndicatorProps = {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  className?: string;
  label?: (index: number) => string;
};

export function DotIndicator({
  count,
  activeIndex,
  onSelect,
  className,
  label = (i) => `Item ${i + 1}`,
}: DotIndicatorProps) {
  return (
    <ul
      className={cn("flex items-center gap-4", className)}
      role="tablist"
      aria-label="Items"
    >
      {Array.from({ length: count }, (_, i) => (
        <li key={i} role="presentation">
          <button
            type="button"
            role="tab"
            aria-selected={activeIndex === i}
            aria-label={label(i)}
            onClick={() => onSelect(i)}
            className={cn(
              "h-4 w-4 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--color-blue-900))]",
              activeIndex === i ? "bg-white" : "bg-white/20 hover:bg-white/50"
            )}
          />
        </li>
      ))}
    </ul>
  );
}
