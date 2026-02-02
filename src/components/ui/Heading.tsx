import { cn } from "@/lib/utils";

/** Figma text presets 1–4: Bellefair headings */
type HeadingPreset = "1" | "2" | "3" | "4";

type HeadingProps = {
  /** Preset 1–4 (string "1"–"4" or number 1–4) */
  preset?: HeadingPreset | 1 | 2 | 3 | 4;
  as?: "h1" | "h2" | "h3" | "h4" | "span";
  children: React.ReactNode;
  className?: string;
};

const presetClass: Record<HeadingPreset, string> = {
  "1": "text-preset-1",
  "2": "text-preset-2",
  "3": "text-preset-3",
  "4": "text-preset-4",
};

const defaultTag: Record<HeadingPreset, "h1" | "h2" | "h3" | "h4"> = {
  "1": "h1",
  "2": "h2",
  "3": "h3",
  "4": "h4",
};

const PRESETS: HeadingPreset[] = ["1", "2", "3", "4"];

function toPreset(value: unknown): HeadingPreset {
  const s = String(value);
  return PRESETS.includes(s as HeadingPreset) ? (s as HeadingPreset) : "2";
}

export function Heading({
  preset = "2",
  as,
  children,
  className,
}: HeadingProps) {
  const p = toPreset(preset);
  const Tag = as ?? defaultTag[p];
  return (
    <Tag className={cn(presetClass[p], "text-white", className)}>
      {children}
    </Tag>
  );
}
