import { Stack } from "expo-router";

export default function RootLayoutBackUp() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />

      <Stack.Screen name="products" options={{ title: "Products" }} />

      <Stack.Screen
        name="product-details"
        options={{ title: "Product Details" }}
      />

      <Stack.Screen name="profile" options={{ title: "Profile" }} />
    </Stack>
  );
}
