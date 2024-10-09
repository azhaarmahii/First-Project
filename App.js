import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require("./assets/src/images/pak.webp")}
        style={styles.img}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  img: {
    flex: 1,
    marginTop: 100,
    borderRadius: 99,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});
