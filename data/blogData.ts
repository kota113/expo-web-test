export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image?: string;
}

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with React Native",
    excerpt: "Learn the basics of building mobile apps with React Native and Expo.",
    content: "React Native is a powerful framework for building cross-platform mobile applications using JavaScript and React. In this post, we'll explore the fundamentals and get you started on your journey.",
    author: "John Doe",
    date: "2025-12-01",
    category: "Tutorial",
  },
  {
    id: "2",
    title: "Understanding NativeWind",
    excerpt: "Discover how to use Tailwind CSS in your React Native projects.",
    content: "NativeWind brings the power of Tailwind CSS to React Native, allowing you to style your components using utility classes. This makes styling faster and more consistent across your app.",
    author: "Jane Smith",
    date: "2025-12-02",
    category: "Guide",
  },
  {
    id: "3",
    title: "Building Responsive Layouts",
    excerpt: "Create layouts that work seamlessly across mobile and desktop.",
    content: "Responsive design is crucial for modern applications. Learn how to build layouts that adapt to different screen sizes using breakpoints and platform-specific components.",
    author: "Mike Johnson",
    date: "2025-12-03",
    category: "Design",
  },
  {
    id: "4",
    title: "Expo Router Deep Dive",
    excerpt: "Master file-based routing in Expo applications.",
    content: "Expo Router brings file-based routing to React Native, similar to Next.js. This simplifies navigation and makes your app structure more intuitive and maintainable.",
    author: "Sarah Williams",
    date: "2025-12-04",
    category: "Tutorial",
  },
  {
    id: "5",
    title: "State Management Best Practices",
    excerpt: "Learn effective patterns for managing state in React Native apps.",
    content: "Managing state effectively is key to building scalable applications. We'll explore various state management solutions and when to use each one in your React Native projects.",
    author: "David Brown",
    date: "2025-12-05",
    category: "Best Practices",
  },
];
