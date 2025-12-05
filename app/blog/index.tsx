import React from "react";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import MobileLayout from "./layouts/MobileLayout";
import DesktopLayout from "./layouts/DesktopLayout";
import { mockBlogPosts } from "@/data/blogData";

export default function BlogPage() {
  const { bp } = useBreakpoint();
  const isDesktop = bp === "lg" || bp === "xl";

  // Mobile width: use MobileLayout on all platforms
  if (!isDesktop) {
    return <MobileLayout posts={mockBlogPosts} />;
  }

  // Desktop width:
  // - On web: uses DesktopLayout.web.tsx (with Tailwind)
  // - On native: uses DesktopLayout.tsx (which renders MobileLayout)
  return <DesktopLayout posts={mockBlogPosts} />;
}
