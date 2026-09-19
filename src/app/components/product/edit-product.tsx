import { useEffect, useState } from "react";
import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

type Product = {
  id: number;
  name: string;
  price: number;
};

type Props = {
  visible: boolean;
  product: Product | null;
  onClose: () => void;
  onSave: (updated: Product) => void;
};

export default function EditProductModal({
  visible,
  product,
  onClose,
  onSave,
}: Props) {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("0");

  useEffect(() => {
    if (product) {
      setId(product.id);
      setName(product.name);
      setPrice(product.price.toString());
    }
  }, [product]);

  const handleSave = () => {
    if (!product) return;
    onSave({
      ...product,
      name,
      price: parseFloat(price) || 0,
    });
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.backdrop}>
        <View style={styles.sheet}>
          <Text style={styles.title}>Edit Product</Text>

          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Name"
          />
          <TextInput
            style={styles.input}
            value={price}
            onChangeText={setPrice}
            placeholder="Price"
            keyboardType="numeric"
          />

          <View style={styles.actions}>
            <Pressable onPress={onClose}>
              <Text>Cancel</Text>
            </Pressable>
            <Pressable onPress={handleSave}>
              <Text style={styles.save}>Save</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    padding: 24,
  },
  sheet: { backgroundColor: "white", borderRadius: 12, padding: 20 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  actions: { flexDirection: "row", justifyContent: "flex-end", gap: 16 },
  save: { color: "#007AFF", fontWeight: "bold" },
});
