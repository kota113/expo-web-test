import React, { useState } from "react";
import { BlogPost } from "@/data/blogData";


interface DesktopLayoutProps {
  posts: BlogPost[];
}

function DesktopLayout({ posts }: DesktopLayoutProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(posts[0] || null);

  return (
    <div className="flex flex-row bg-gray-50 h-screen">
      {/* Left Sidebar - Post List */}
      <div className="w-96 bg-white border-r border-gray-200">
        <div className="p-6 border-b border-gray-200 bg-gradient-to-br from-blue-50 to-white">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Blog</h1>
          <p className="text-base text-gray-600">Latest Articles</p>
        </div>
        
        <div className="overflow-y-auto h-full">
          <div className="p-4">
            {posts.map((post) => (
              <button
                key={post.id}
                className={`w-full text-left p-4 mb-3 rounded-xl border ${
                  selectedPost?.id === post.id
                    ? "bg-blue-50 border-blue-200"
                    : "bg-white border-gray-200 hover:border-blue-300"
                }`}
                onClick={() => setSelectedPost(post)}
              >
                <div className="mb-2">
                  <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex flex-row items-center gap-2">
                  <span className="text-xs text-gray-500">{post.author}</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Content Area - Post Detail */}
      <div className="flex-1 overflow-y-auto">
        {selectedPost ? (
          <div className="max-w-4xl mx-auto p-12">
            <div className="mb-6">
              <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded mb-4">
                {selectedPost.category}
              </span>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                {selectedPost.title}
              </h1>
              <div className="flex flex-row items-center gap-3 mb-6">
                <span className="text-base text-gray-600">{selectedPost.author}</span>
                <span className="text-base text-gray-400">•</span>
                <span className="text-base text-gray-600">{selectedPost.date}</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {selectedPost.excerpt}
              </p>
              <div className="h-px bg-gray-200 mb-6" />
              <p className="text-lg text-gray-800 leading-loose">
                {selectedPost.content}
              </p>
            </div>

            {/* Additional placeholder content for desktop */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                About the Author
              </h2>
              <p className="text-base text-gray-700">
                {selectedPost.author} is a passionate writer and developer sharing insights
                about web and mobile development.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-xl text-gray-500">Select a post to read</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DesktopLayout;
