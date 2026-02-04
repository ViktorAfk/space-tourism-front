import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui";

export function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16">
      <Heading preset="2" as="h1" className="text-foreground">
        404
      </Heading>
      <Text preset="body" muted>
        This page could not be found.
      </Text>
      <Button onClick={() => navigate("/")}>Go home</Button>
    </div>
  );
}
