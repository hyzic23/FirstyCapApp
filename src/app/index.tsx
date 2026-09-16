import { StyleSheet, Text, View } from "react-native";
import Card from "./components/common/Card";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.label}>Total Users</Text>
        <Text style={styles.number}>120</Text>
      </Card>

      <Card>
        <Text style={styles.label}>Total Orders</Text>
        <Text style={styles.number}>45</Text>
      </Card>
    </View>
  );
  // return <Redirect href="/login" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F3F4F6",
  },

  label: {
    fontSize: 15,
    color: "#6B7280",
  },

  number: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 8,
  },
});
