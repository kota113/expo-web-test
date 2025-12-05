import React from "react";
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { BlogPost } from "@/data/blogData";

interface MobileLayoutProps {
  posts: BlogPost[];
}

function MobileLayout({ posts }: MobileLayoutProps) {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Blog</Text>
        <Text style={styles.subtitle}>Latest Articles</Text>
      </View>
      
      <View style={styles.postsContainer}>
        {posts.map((post) => (
          <Pressable
            key={post.id}
            style={styles.postCard}
            onPress={() => router.push(`/blog/${post.id}`)}
          >
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{post.category}</Text>
            </View>
            <Text style={styles.postTitle}>{post.title}</Text>
            <Text style={styles.postExcerpt}>{post.excerpt}</Text>
            <View style={styles.postMeta}>
              <Text style={styles.metaText}>{post.author}</Text>
              <Text style={styles.metaText}>•</Text>
              <Text style={styles.metaText}>{post.date}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

export default MobileLayout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#f9fafb",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#6b7280",
  },
  postsContainer: {
    padding: 16,
  },
  postCard: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  categoryBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#dbeafe",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1e40af",
  },
  postTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },
  postExcerpt: {
    fontSize: 14,
    color: "#6b7280",
    lineHeight: 20,
    marginBottom: 12,
  },
  postMeta: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  metaText: {
    fontSize: 13,
    color: "#9ca3af",
  },
});
