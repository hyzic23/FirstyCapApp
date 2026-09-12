import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type CounterProps = {
  title: string;
};

export default function Counter({ title }: CounterProps) {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.count}>{count}</Text>

      <Button title="Add" onPress={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 30,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  count: {
    fontSize: 40,
    marginVertical: 10,
  },
});
