import { router } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

type ProductProps = {
  name: string;
  price: number;
  onPress: () => void;
};

const products = [
  {
    id: "1",
    name: "iPhone",
    price: 999,
  },
  {
    id: "2",
    name: "MacBook",
    price: 1999,
  },
  {
    id: "3",
    name: "AirPods",
    price: 249,
  },
];

export default function ProductScreen({ name, price, onPress }: ProductProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.product}
            onPress={() =>
              router.push({
                pathname: "/components/products/product-details",
                params: {
                  id: item.id,
                  name: item.name,
                  price: item.price.toString(),
                },
              })
            }
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </Pressable>
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

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },

  product: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  price: {
    marginTop: 5,
    fontSize: 16,
  },
});
