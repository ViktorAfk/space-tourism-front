import { cn } from "@/lib/utils";

/** Figma text presets: body (9), nav (7), subheading (8), subheading-2 (6) */
type TextPreset = "body" | "nav" | "subheading" | "subheading2" | "label";

type TextProps = {
  preset?: TextPreset;
  as?: "p" | "span" | "div" | "label";
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
};

const presetClass: Record<TextPreset, string> = {
  body: "text-preset-9",
  nav: "text-preset-7",
  subheading: "text-preset-8",
  subheading2: "text-preset-6",
  label: "text-preset-5",
};

export function Text({
  preset = "body",
  as: Tag = "p",
  children,
  className,
  muted = false,
}: TextProps) {
  return (
    <Tag
      className={cn(
        presetClass[preset],
        muted ? "text-[hsl(var(--color-blue-300))]" : "text-white",
        className
      )}
    >
      {children}
    </Tag>
  );
}
