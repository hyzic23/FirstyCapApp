import { MOCK_USERS } from "../mocks/user";

// simulate network latency
const delay = (ms = 800) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockAuthApi = {
  login: async ({ email, password }) => {
    await delay(); // simulate network round-trip

    const user = MOCK_USERS.find((u) => u.email === email);

    if (!user) {
      // mimic a typical API error shape
      throw { status: 404, message: "No account found with this email" };
    }

    if (user.password !== password) {
      throw { status: 401, message: "Incorrect password" };
    }

    // mimic a real login response: user + fake token
    return {
      user: { id: user.id, email: user.email, name: user.name },
      token: `mock-jwt-token-${user.id}-${Date.now()}`,
    };
  },
};
