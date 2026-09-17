import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function UserActivity() {
  const handleLogout = async () => {
    //setUser(null);
    router.dismissAll();
    router.replace("/login");
  };

  return (
    <SafeAreaProvider style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>My Dashboard</Text>
          <Text style={styles.profile}>Profile</Text>
        </View>

        {/* Welcome Section */}
        <View style={styles.welcome}>
          <Text style={styles.title}>Hello, Isaac!</Text>
          <Text style={styles.subtitle}>Here is your activity overview.</Text>
        </View>

        {/* Statistics Cards */}
        <View style={styles.cardRow}>
          <View style={styles.card}>
            <Text style={styles.cardLabel}>Total Projects</Text>
            <Text style={styles.cardNumber}>12</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardLabel}>Completed</Text>
            <Text style={styles.cardNumber}>8</Text>
          </View>
        </View>

        {/* Activity Section */}
        <View style={styles.activitySection}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>

          <View style={styles.activityItem}>
            <Text style={styles.activityTitle}>Project completed</Text>
            <Text style={styles.activityText}>
              Your latest task is finished.
            </Text>
          </View>

          <View style={styles.activityItem}>
            <Text style={styles.activityTitle}>New task assigned</Text>
            <Text style={styles.activityText}>
              You have a new task to review.
            </Text>
          </View>

          {/* Bottom Action */}
          <View style={styles.bottomAction}>
            <Text
              style={styles.buttonText}
              onPress={() => {
                router.push("/components/product/Product");
              }}
            >
              View All Activities
            </Text>
          </View>

          <Button title="Logout" onPress={handleLogout} />
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  logo: {
    fontSize: 22,
    fontWeight: "bold",
  },

  profile: {
    color: "#2563EB",
    fontSize: 16,
  },

  welcome: {
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 16,
    color: "#6B7280",
  },

  cardRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },

  card: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    padding: 16,
  },

  cardLabel: {
    fontSize: 14,
    color: "#6B7280",
  },

  cardNumber: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },

  activitySection: {
    flex: 1,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  activityItem: {
    backgroundColor: "#F9FAFB",
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
  },

  activityTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },

  activityText: {
    fontSize: 14,
    color: "#6B7280",
  },

  bottomAction: {
    backgroundColor: "#2563EB",
    borderRadius: 10,
    padding: 16,
    alignItems: "center",
    //marginTop: "auto", // Pushes button smoothly to the bottom if space allows
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
