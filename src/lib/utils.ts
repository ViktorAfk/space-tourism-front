import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // Custom typography presets – must not conflict with text-color (text-white, etc.)
      "text-preset": [
        "text-preset-1",
        "text-preset-2",
        "text-preset-3",
        "text-preset-4",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
