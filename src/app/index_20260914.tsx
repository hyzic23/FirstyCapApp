import { getPosts } from "@/services/api";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { Post } from "../types/post";

export default function HomeScreen() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getPosts();
      setPosts(data);
    } catch (err) {
      setError("Unable to load posts");
    } finally {
      setLoading(false);
    }
  };

  // Get Posts
  // const fetchPosts = async () => {
  //   try {
  //     setLoading(true);
  //     setError("");

  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts",
  //     );

  //     if (!response.ok) {
  //       throw new Error("Failed to fetch posts");
  //     }

  //     const data: Post[] = await response.json();
  //     setPosts(data);
  //   } catch (err) {
  //     setError("Unable to load posts");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Create Post
  // const createPost = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           title: "My new post",
  //           body: "This post was created from React Native",
  //           userId: 1,
  //         }),
  //       },
  //     );

  //     if (!response.ok) {
  //       throw new Error("Failed to create post");
  //     }

  //     const createdPost = await response.json();

  //     console.log("Created post:", createdPost);
  //   } catch (err) {
  //     console.log("Error creating post:", err);
  //   }
  // };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading posts...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postBody}>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  post: {
    padding: 15,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: "#eeeeee",
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    textTransform: "capitalize",
  },
  postBody: {
    fontSize: 15,
    lineHeight: 22,
  },
  error: {
    color: "red",
    fontSize: 16,
  },
});
