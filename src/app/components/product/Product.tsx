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
      <Text style={styles.title}>Products</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={styles.product}
            // onPress={() =>
            //   router.push({
            //     pathname: "/components/product/product-details",
            //     params: {
            //       id: item.id,
            //       name: item.name,
            //       price: item.price.toString(),
            //     },
            //   })
            // }
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
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

  sample: {
    flex: 1,
    justifyContent: "space-evenly",
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
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: "#333333",
    flex: 1,
  },
  actionContainer: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 16,
  },
});
