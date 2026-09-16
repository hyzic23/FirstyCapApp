// screens/SignupScreen.js
import { useState } from "react";
import {
    ActivityIndicator,
    Button,
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
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      {error && <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>}
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button title="Sign Up" onPress={handleSignup} />
      )}
      <TouchableOpacity onPress={onSwitchToLogin} style={{ marginTop: 15 }}>
        <Text style={{ color: "blue", textAlign: "center" }}>
          Already have an account? Log in
        </Text>
      </TouchableOpacity>
    </View>
  );
}
