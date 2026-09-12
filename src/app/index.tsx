import { StyleSheet, View } from "react-native";
import RegisterScreen from "./components/RegisterScreen";

export default function HomeScreen() {
  //const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <RegisterScreen />
      {/* <LoginScreen /> */}
      {/* <Text style={styles.title}>What's your name?</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.result}>Hello, {name}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
  },

  result: {
    fontSize: 20,
    marginTop: 20,
  },
});
