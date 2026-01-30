"use client";

import { useEffect, useState } from "react";
import { MDXProvider } from "@mdx-js/react";
import Callout from "@/components/Callout";


export default function ProjectMDX({ file }: { file: string }) {
  const [Content, setContent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    import(`@/content/projects/${file}.mdx`)
      .then((mod) => setContent(() => mod.default))
      .catch((err) => console.error("MDX load failed:", err));
  }, [file]);

  if (!Content) return null;

  return (
    <MDXProvider components={{ Callout }}>
      <Content />
    </MDXProvider>
  );
}
