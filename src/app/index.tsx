import { Redirect } from "expo-router";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  const handleLogin = () => {
    console.log("Login button pressed");
  };

  const handleRegister = () => {
    console.log("Register button pressed");
  };

  return <Redirect href="/login" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});
