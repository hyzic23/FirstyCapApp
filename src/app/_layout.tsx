import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{ title: "Login", headerBackVisible: false }}
      />

      <Stack.Screen
        name="../app/user-activity"
        options={{ title: "Dashboard" }}
      />

      <Stack.Screen name="index" options={{ title: "Home" }} />

      <Stack.Screen
        name="components/product/Product"
        options={{ title: "Products" }}
      />
    </Stack>
  );
}
