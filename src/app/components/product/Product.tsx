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
import EditProductModal from "./edit-product";

type ProductProps = {
  name: string;
  price: number;
  onPress: () => void;
};

export default function ProductScreen({ name, price, onPress }: ProductProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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

  const handleEdit = (product: Product) => {
    setSelectedProduct(product); // stores the clicked/selected product
    setModalVisible(true); // opens modal
  };

  const handleSave = (updated: Product) => {
    setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
    setModalVisible(false);
    setSelectedProduct(null);
  };

  const handleDelete = (id: number) => {
    setProducts((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
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
            <Text style={[styles.cell, styles.colPrice]}>
              ${item.price.toFixed(2)}
            </Text>
            <View style={[styles.colActions, styles.actions]}>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => handleEdit(item)}
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

      {/* Create Modal Form */}
      <EditProductModal
        visible={modalVisible}
        product={selectedProduct}
        onClose={() => {
          setModalVisible(false);
          setSelectedProduct(null);
        }}
        onSave={handleSave}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },

  title: {
    marginBottom: 16,
    fontWeight: "bold",
    justifyContent: "center",
  },

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

  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
  },

  modalContainer: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },

  modalMessage: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 24,
  },

  closeButton: {
    backgroundColor: "#dc2626",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
});
