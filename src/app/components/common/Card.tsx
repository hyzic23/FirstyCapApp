import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,

    // Shadow for iOS
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    // Shadow for Android
    elevation: 3,
  },
});
