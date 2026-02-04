import { useEffect, useState } from "react";

import { Logo, NavLink } from "@/components/ui";
import { cn } from "@/lib/utils";

import iconClose from "@/assets/shared/icon-close.svg";
import iconHamburger from "@/assets/shared/icon-hamburger.svg";

const navItems = [
  { to: "/", number: "00", label: "Home", end: true },
  { to: "/destination", number: "01", label: "Destination", end: false },
  { to: "/crew", number: "02", label: "Crew", end: false },
  { to: "/technology", number: "03", label: "Technology", end: false },
] as const;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className="relative z-10 bg-transparent px-6 md:pl-16 md:pr-0 md:pt-10"
        role="banner"
      >
        <div className="flex items-center justify-between w-full">
          <Logo />

          {/* Desktop: vertical line + nav */}
          <div className="hidden md:flex md:justify-between md:flex-1 md:items-center md:pl-16 lg:pl-20">
            <div
              className="h-px w-[calc(100%+40px)] relative left-10 z-10 bg-(--border-color)"
              aria-hidden
            />
            <nav
              className="flex items-center bg-[#FFFFFF0D] backdrop-blur-[80px] gap-8 lg:gap-12 h-24 pr-16 pl-40"
              aria-label="Main"
            >
              {navItems.map(({ to, number, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  number={number}
                  end={end}
                  className="h-full"
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Mobile: hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden inline-flex size-10 items-center justify-center text-[hsl(var(--color-blue-300))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--color-blue-900))]"
            aria-label="Open menu"
          >
            <img src={iconHamburger} alt="" width={24} height={21} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-20 bg-[hsl(var(--color-blue-900)/0.95)] backdrop-blur-sm transition-opacity md:hidden",
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex justify-end px-6 pt-8">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex size-10 items-center justify-center text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close menu"
          >
            <img src={iconClose} alt="" width={20} height={21} />
          </button>
        </div>
        <nav className="flex flex-col gap-6 px-6 pt-16" aria-label="Main">
          {navItems.map(({ to, number, label, end }) => (
            <NavLink
              key={to}
              to={to}
              number={number}
              end={end}
              className="text-preset-5 tracking-(--text-preset-5-letter-spacing) text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}
