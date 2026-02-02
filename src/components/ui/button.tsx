import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--color-blue-900))] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground rounded-md shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground rounded-md shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-transparent rounded-md hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground rounded-md shadow-sm hover:bg-secondary/80",
        ghost: "rounded-md hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        /** Figma: large circular CTA (e.g. "Explore") */
        explore:
          "rounded-full bg-white text-[hsl(var(--color-blue-900))] text-preset-4 hover:ring-[3rem] hover:ring-white/10",
        /** Figma: nav-style link (Barlow Condensed, uppercase) */
        nav: "text-preset-7 uppercase tracking-[var(--text-preset-7-letter-spacing)] text-[hsl(var(--color-blue-300))] hover:text-white bg-transparent",
      },
      size: {
        default: "h-9 px-4 py-2 text-sm rounded-md",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        /** Figma: Explore button – 274×274 circle (desktop), scale for smaller screens */
        explore:
          "h-[9.5rem] w-[9.5rem] text-[1.25rem] md:h-[15rem] md:w-[15rem] md:text-[2rem]",
        icon: "h-9 w-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
