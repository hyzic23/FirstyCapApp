import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import { useState } from "react";
import Input from "./common/Input";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const handleRegister = () => {
    if (!name) {
      setError("Name is required");
      return;
    }

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!password) {
      setError("Password is required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    console.log("Registration successful");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <Text style={styles.label}>Name</Text>

      <Input
        //style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email</Text>

      <Input
        //style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        //keyboardType="email-address"
        //autoCapitalize="none"
      />

      <Text style={styles.label}>Password</Text>

      <Input
        //style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text style={styles.label}>Confirm Password</Text>

      <TextInput
        style={styles.input}
        placeholder="Confirm your password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      {error && <Text style={styles.error}>{error}</Text>}

      <Button title="Create Account" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },

  error: {
    color: "red",
    marginBottom: 15,
  },
});
