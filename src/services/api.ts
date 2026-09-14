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
  }

  return response.json();
};

export const getPosts = () => {
  return apiClient<Post[]>("/posts");
};
