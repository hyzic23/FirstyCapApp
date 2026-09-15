import { StyleSheet, View } from "react-native";
import CustomButton from "./components/CustomButtons";

export default function HomeScreen() {
  const handleLogin = () => {
    console.log("Login button pressed");
  };

  const handleRegister = () => {
    console.log("Register button pressed");
  };

  return (
    <View style={styles.container}>
      <CustomButton title="Login" onPress={handleLogin} />
      <CustomButton title="Register" onPress={handleRegister} />
      <CustomButton title="Continue" onPress={handleLogin} />
    </View>
  );

  // return <Redirect href="/login" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});
