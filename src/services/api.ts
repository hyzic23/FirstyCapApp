import { Post } from "../types/post";

const API_URL = "https://jsonplaceholder.typicode.com";

const apiClient = async <T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
};

// Get Method
export const getPosts = (): Promise<Post[]> => {
  return apiClient<Post[]>("/posts");
};

// Get Method using Id
export const getPostById = (id: number): Promise<Post> => {
  return apiClient<Post>(`/posts/${id}`);
};

// Create Method
export const createPost = (post: Omit<Post, "id">): Promise<Post> => {
  return apiClient<Post>("/posts", {
    method: "POST",
    body: JSON.stringify(post),
  });
};

// UPDATE - Update an existing post
export const updatePost = (id: number, post: Partial<Post>): Promise<Post> => {
  return apiClient<Post>(`/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(post),
  });
};

// DELETE - Delete a post
export const deletePost = (id: number): Promise<void> => {
  return apiClient<void>(`/posts/${id}`, {
    method: "DELETE",
  });
};
