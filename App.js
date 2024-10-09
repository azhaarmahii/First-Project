import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const { height, width } = Dimensions.get("screen");

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <View>
        <TextInput
          placeholder="Enter your name"
          style={styles.input}
          inputMode="email"
        />
        <TextInput
          placeholder="Enter your password"
          style={[styles.input, { marginTop: 20 }]}
          inputMode="none"
          secureTextEntry
        />

        <TouchableOpacity
          style={{
            height: 48,
            width: "90%",
            backgroundColor: "blue",
            alignSelf: "center",
            marginTop: 50,
            borderRadius: 44,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff" }}>Login </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    // textAlign: "center",s
    textAlign: "center",
    marginTop: height * 0.1,
  },
  input: {
    borderWidth: 1,
    height: 48,
    width: "90%",
    alignSelf: "center",
    paddingLeft: 10,
    borderRadius: 12,
    marginTop: height * 0.05,
  },
});
