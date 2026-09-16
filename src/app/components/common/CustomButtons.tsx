import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../../theme";

type CustomButtomProps = {
  title: string;
  styless: string;
  onPress: () => void;
};

export default function CustomButton({
  title,
  styless,
  onPress,
}: CustomButtomProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    //backgroundColor: "#2563EB",
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 8,
  },

  secondaryButton: {
    backgroundColor: "#E5E7EB",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  secondaryButtonText: {
    color: "#1F2937",
  },
});
