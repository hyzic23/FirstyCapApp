import { FlatList, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text style={styles.name}>{item.name}</Text>

            <Text style={styles.price}>${item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* {products.map((product) => (
        <Product key={product.id} name={product.name} price={product.price} />
      ))} */}
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
    fontSize: 16,
    marginTop: 5,
  },
});
