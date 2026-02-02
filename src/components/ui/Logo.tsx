import { Link } from "react-router-dom";

import logo from "@/assets/shared/logo.svg";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Use when logo is not inside a router context */
  href?: string;
};

export function Logo({ className, href = "/" }: LogoProps) {
  return (
    <Link
      to={href}
      className={cn(
        "inline-flex shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--color-blue-900))]",
        className
      )}
      aria-label="Space Tourism – Home"
    >
      <img src={logo} alt="" width={48} height={48} className="h-12 w-12" />
    </Link>
  );
}
