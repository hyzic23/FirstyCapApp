import { router } from "expo-router";
import { useState } from "react";
import {
    ActivityIndicator,
    Button,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

type LoginScreenProps = {
  onSwitchToLogin: () => void;
};

export default function SignupScreen({ onSwitchToLogin }: LoginScreenProps) {
  //const { signup } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignup = async () => {
    setLoading(true);
    setError(null);
    try {
      //await signup({ email, password, name });
    } catch (err) {
      //setError(err.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BETA Support</Text>
      <Text style={styles.subtitle}>New User? Please enter your details </Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      {error && <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>}
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button title="Sign Up" onPress={handleSignup} />
      )}

      <TouchableOpacity
        onPress={() => router.push("/login")}
        style={{ marginTop: 15 }}
      >
        <Text style={{ color: "#87bfff", textAlign: "center" }}>
          Already have an account? Log in
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    paddingHorizontal: 15,
    borderRadius: 8,
    fontSize: 16,
    //padding: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: 15,
  },
});
