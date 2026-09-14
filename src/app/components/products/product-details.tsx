import { router, useLocalSearchParams } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function ProductDetailsScreen() {
  const { id, name, price } = useLocalSearchParams<{
    id: string;
    name: string;
    price: string;
  }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Details</Text>

      <Text style={styles.label}>Product ID: {id}</Text>

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.price}>${price}</Text>

      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },

  label: {
    fontSize: 14,
    color: "gray",
    marginBottom: 10,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  price: {
    fontSize: 20,
    marginBottom: 30,
  },
});
