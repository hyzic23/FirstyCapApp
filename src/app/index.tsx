import { StyleSheet, View } from "react-native";
import Counter from "./components/Counter";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Counter title="My Counter" />
      <Counter title="Another Counter" />
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

//Number Counter
// export default function HomeScreen() {
//   const [count, setCount] = useState(0);

//   const handleAdd = () => {
//     setCount(count + 1);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Count: {count}</Text>

//       <Button title="Add" onPress={handleAdd} />
//     </View>
//   );
// }

// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Brume's Store</Text>

//       <Welcome name="Ese Desire" />

//       <Product name="iPhone" price={999} />
//       <Product name="MacBook" price={1999} />
//       <Product name="Airpods" price={249} />
//     </View>
//   );
// }

// export default function HomeScreen() {
//   const handlePress = () => {
//     Alert.alert("Button Pressed!");
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Hello World!</Text>

//       <Text style={styles.subtitle}>Welcome to my first React Native app.</Text>

//       <View style={styles.button}>
//         <Button title="Click Me" onPress={handlePress} />
//       </View>
//     </View>
//   );
// }

// export default function Index() {
//   const colorScheme = useColorScheme();
//   const themeTextStyle =
//     colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
//   const themeContainerStyle =
//     colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text> Content is in safe area.</Text>
//       <Text style={{ fontFamily: "Inter", fontWeight: "700" }}>Inter Bold</Text>
//       <Text
//         style={{ fontFamily: "Inter", fontWeight: "700", fontStyle: "italic" }}
//       >
//         Inter Bold Italic
//       </Text>
//       <Text style={{ fontFamily: "FiraSans-MediumItalic" }}>
//         Fira Sans Medium Italic
//       </Text>
//       <Ionicons name="checkmark-circle" size={32} color="green" />
//       <Image source={{ uri: "example" }} style={{ width: 100, height: 100 }} />
//       {/* <Image source={require("@/assets/images/react-logo.png")} /> */}
//     </SafeAreaView>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 25,
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
  },

  result: {
    fontSize: 22,
    marginTop: 20,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },

//   title: {
//     fontSize: 25,
//     //fontWeight: "bold",
//     marginBottom: 20,
//   },

//   subtitle: {
//     fontSize: 18,
//     textAlign: "center",
//   },

//   button: {
//     width: 200,
//   },
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   ext: {
//     fontSize: 20,
//   },
//   lightContainer: {
//     backgroundColor: "#d0d0c0",
//   },
//   darkContainer: {
//     backgroundColor: "#242c40",
//   },
//   lightThemeText: {
//     color: "#242c40",
//   },
//   darkThemeText: {
//     color: "#d0d0c0",
//   },
// });
