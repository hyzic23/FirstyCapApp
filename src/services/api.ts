import { Post } from "../types/post";

const API_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = async (): Promise<Post[]> => {
  const response = await fetch(`${API_URL}/posts`);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};
