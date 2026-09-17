import { Product } from "@/types/product";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { mockAuthApi } from "../../../services/mockAuthApi";

type ProductProps = {
  name: string;
  price: number;
  onPress: () => void;
};

export default function ProductScreen({ name, price, onPress }: ProductProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await mockAuthApi.getAllProducts();
      setProducts(data.products);
    } catch (err) {
      console.error("Unable to load products:", err);
      const message =
        (err as { message?: string })?.message ?? "Unable to call products api";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id: number) => {
    // Add your edit logic here
    alert(`Edit item: ${id}`);
  };

  const handleDelete = (id: number) => {
    //setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* <Text variant="headlineMedium" style={styles.title}> */}
      <Text style={styles.title}>Products</Text>

      {/* Header row (outside the list) */}
      <View style={styles.headerRow}>
        <Text style={[styles.headerCell, styles.colName]}>Name</Text>
        <Text style={[styles.headerCell, styles.colPrice]}>Price</Text>
        <Text style={[styles.headerCell, styles.colActions]}>Actions</Text>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={[styles.cell, styles.colName]} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={[styles.cell, styles.colPrice]}>${item.price}</Text>
            <View style={[styles.colActions, styles.actions]}>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => handleEdit(item.id)}
              >
                <Ionicons name="pencil" size={20} color="#4A90E2" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => handleDelete(item.id)}
              >
                <Ionicons name="trash" size={20} color="#E74C3C" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },

  title: { marginBottom: 16, fontWeight: "bold" },

  // Header
  headerRow: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#E0E0E0",
    backgroundColor: "#FAFAFA",
  },
  headerCell: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#333",
  },

  // Rows
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  cell: { fontSize: 14, color: "#444" },
  separator: { height: 1, backgroundColor: "#EEEEEE" },

  // Column sizing (shared so header & rows align)
  colName: { flex: 3 },
  colPrice: { flex: 1, textAlign: "right" },
  colActions: { flex: 1.2, textAlign: "right" },

  // Action buttons
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 8,
  },
  iconButton: {
    padding: 6,
  },
});
