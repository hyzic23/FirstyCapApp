import { FlatList, StyleSheet, Text, View } from "react-native";
import Product from "./components/Product";

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
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Product
            name={item.name}
            price={item.price}
            onPress={() => console.log(item.name)}
          />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Text style={styles.title}>Products.</Text>}
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
    fontSize: 16,
    marginTop: 5,
  },
});
