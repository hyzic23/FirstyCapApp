import { StyleSheet, Text, View } from "react-native";

type WelcomeProps = {
  name: string;
};

export default function Welcome({ name }: WelcomeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {name}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
