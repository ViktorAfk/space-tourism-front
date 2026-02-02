import { NavLink as RouterNavLink } from "react-router-dom";

import { cn } from "@/lib/utils";

/** Figma: Nav text – Barlow Condensed 14px, letter-spacing, uppercase */
type NavLinkProps = {
  to: string;
  number?: string;
  children: React.ReactNode;
  className?: string;
  end?: boolean;
  onClick?: () => void;
};

export function NavLink({
  to,
  number,
  children,
  className,
  end = false,
  onClick,
}: NavLinkProps) {
  return (
    <RouterNavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "text-preset-7 inline-flex items-center gap-2 uppercase tracking-(--text-preset-7-letter-spacing) text-[hsl(var(--color-blue-300))] transition-colors hover:text-white",
          isActive && "border-b-2 border-white text-white",
          className
        )
      }
    >
      {number != null && (
        <span className="font-bold tabular-nums">{number}</span>
      )}
      {children}
    </RouterNavLink>
  );
}
