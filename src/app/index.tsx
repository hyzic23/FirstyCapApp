import { Redirect } from "expo-router";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  return <Redirect href="/login" />;
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
