import { Link } from "react-router-dom";

import { Heading, Text } from "@/components/ui";

export function HomePage() {
  return (
    <section
      className="flex flex-1 flex-col min-h-0 md:flex-row md:items-end md:justify-between md:gap-20 px-6 py-12 md:px-(--layout-header-padding-x) md:pb-[128px] md:pt-24"
      aria-label="Hero"
    >
      {/* Content container – no background here; it's in AppLayout */}
      <div className="container mx-auto flex max-w-[min(90rem,100%)] flex-1 flex-col items-center gap-12 pt-10 md:flex-row md:items-end md:justify-between md:gap-20 md:pt-0">
        {/* Left column: intro + heading + body */}
        <div className="max-w-md text-center md:text-left">
          <p
            className="text-preset-5 uppercase tracking-(--text-preset-5-letter-spacing) text-[hsl(var(--color-blue-300))]"
            data-content="intro"
          >
            So, you want to travel to
          </p>
          <Heading preset="1" className="mt-4 uppercase md:mt-6 !leading-none">
            Space
          </Heading>
          <Text preset="body" muted className="mt-6 leading-[1.75] md:max-w-xl">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Text>
        </div>

        <div className="flex shrink-0 items-center justify-center md:justify-end">
          <Link
            to="/destination"
            aria-label="Explore destinations"
            className="explore-cta"
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
}
