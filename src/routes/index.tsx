import { createFileRoute } from "@tanstack/react-router";
import { WorkbenchPage } from "@/lib/workbench";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TarkAI — Sovereign AI Workbench | MRPL" },
      { name: "description", content: "A secure, on-premise AI workbench for trusted knowledge work across MRPL." },
      { property: "og:title", content: "TarkAI — Sovereign AI Workbench | MRPL" },
      { property: "og:description", content: "A private AI environment for MRPL’s people, processes and knowledge." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <WorkbenchPage page="home" />,
});
