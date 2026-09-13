import { Pressable, StyleSheet, Text } from "react-native";

type ProductProps = {
  name: string;
  price: number;
  onPress: () => void;
};

export default function Product({ name, price, onPress }: ProductProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.name}>{name}</Text>

      <Text style={styles.price}>${price}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    borderBottomColor: "#ddd",
    marginVertical: 10,
    borderWidth: 1,
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
