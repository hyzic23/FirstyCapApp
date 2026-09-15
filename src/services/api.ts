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

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Login Logic
////////////////////////////////////////////////////////////////////////////////////////////////////////////
export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};

const LOGIN_API_URL = "/auth/api/login";
//Uncomment for testing
//const TOKEN_BEARER =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

export const login = async (request: LoginRequest): Promise<LoginResponse> => {
  //Comment for testing
  const response = await apiClient<LoginResponse>(LOGIN_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  //Uncomment for testing
  //let token = TOKEN_BEARER;
  //const response: LoginResponse = { token };
  if (!response?.token?.trim()) {
    throw new Error("Invalid Email or Password");
  }
  return response;
};
