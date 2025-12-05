import React from "react";
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { mockBlogPosts } from "@/data/blogData";

export default function ArticleDetailPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  
  const post = mockBlogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <View style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Article not found</Text>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backLink} onPress={() => router.back()}>
          <Text style={styles.backLinkText}>← Back to articles</Text>
        </Pressable>
      </View>

      <View style={styles.content}>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{post.category}</Text>
        </View>

        <Text style={styles.title}>{post.title}</Text>

        <View style={styles.meta}>
          <Text style={styles.metaText}>{post.author}</Text>
          <Text style={styles.metaText}>•</Text>
          <Text style={styles.metaText}>{post.date}</Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.excerpt}>{post.excerpt}</Text>

        <View style={styles.divider} />

        <Text style={styles.body}>{post.content}</Text>

        <View style={styles.authorSection}>
          <Text style={styles.authorSectionTitle}>About the Author</Text>
          <Text style={styles.authorSectionText}>
            {post.author} is a passionate writer and developer sharing insights
            about web and mobile development.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    padding: 16,
    backgroundColor: "#f9fafb",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  backLink: {
    flexDirection: "row",
    alignItems: "center",
  },
  backLinkText: {
    fontSize: 16,
    color: "#2563eb",
    fontWeight: "600",
  },
  content: {
    padding: 20,
  },
  categoryBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#dbeafe",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginBottom: 16,
  },
  categoryText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1e40af",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 16,
    lineHeight: 36,
  },
  meta: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    marginBottom: 24,
  },
  metaText: {
    fontSize: 14,
    color: "#6b7280",
  },
  divider: {
    height: 1,
    backgroundColor: "#e5e7eb",
    marginVertical: 24,
  },
  excerpt: {
    fontSize: 18,
    color: "#374151",
    lineHeight: 28,
    fontWeight: "500",
  },
  body: {
    fontSize: 16,
    color: "#4b5563",
    lineHeight: 26,
  },
  authorSection: {
    marginTop: 32,
    backgroundColor: "#f9fafb",
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  authorSectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 12,
  },
  authorSectionText: {
    fontSize: 15,
    color: "#6b7280",
    lineHeight: 24,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: "#6b7280",
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  backButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
