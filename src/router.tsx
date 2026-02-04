import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "@/components/layout/AppLayout";

const HomePage = lazy(() =>
  import("@/routes/HomePage").then((m) => ({ default: m.HomePage }))
);
const NotFoundPage = lazy(() =>
  import("@/routes/NotFoundPage").then((m) => ({ default: m.NotFoundPage }))
);

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense
            fallback={
              <div
                className="flex flex-1 items-center justify-center"
                aria-live="polite"
              />
            }
          >
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense
            fallback={
              <div
                className="flex flex-1 items-center justify-center"
                aria-live="polite"
              />
            }
          >
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);
