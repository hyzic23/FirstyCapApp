import { StyleSheet, Text, View } from "react-native";

type ProductProps = {
  name: string;
  price: number;
};

export default function Product({ name, price }: ProductProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <Text style={styles.price}>${price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    padding: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
  },

  price: {
    fontSize: 18,
    marginTop: 5,
  },
});
