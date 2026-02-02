import { Outlet, useLocation } from "react-router-dom";

import { Header } from "@/components/layout/Header";

import bgDesktop from "@/assets/home/background-home-desktop.jpg";
import bgMobile from "@/assets/home/background-home-mobile.jpg";
import bgTablet from "@/assets/home/background-home-tablet.jpg";

export function AppLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div
      className={`relative min-h-screen flex flex-col ${
        !isHome ? "bg-background" : ""
      }`}
    >
      {/* Full-viewport background (home only) – covers header + main */}
      {isHome && (
        <picture className="pointer-events-none fixed inset-0 z-0" aria-hidden>
          <source media="(min-width: 1024px)" srcSet={bgDesktop} />
          <source media="(min-width: 768px)" srcSet={bgTablet} />
          <img
            src={bgMobile}
            alt=""
            className="h-full w-full object-cover object-bottom"
          />
        </picture>
      )}

      <Header />

      {/* Main – no padding on home so hero content can be full-width */}
      <main
        className={`relative z-10 flex flex-1 flex-col ${
          isHome ? "min-h-0" : "container mx-auto px-6 py-8 md:px-10 md:py-800"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
}
