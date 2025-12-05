import React from "react";
import { BlogPost } from "@/data/blogData";
import MobileLayout from "./MobileLayout";

interface DesktopLayoutProps {
  posts: BlogPost[];
}

// On native platforms, we simply use the MobileLayout
// The desktop layout is web-only
function DesktopLayout({ posts }: DesktopLayoutProps) {
  return <MobileLayout posts={posts} />;
}

export default DesktopLayout;
