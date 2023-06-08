import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ImageBackground } from "react-native";
import { Image, Pressable } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color } from "../constant/Color";

export default function SetupWalletScreen() {
  const navigation = useNavigation();
  function nextHandler() {
    navigation.navigate("Verify");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={require("../assets/images/logo_s.png")} />
        </View>
        <View>
          <Text style={styles.text}>Seed Phrase</Text>
        </View>

        <ImageBackground
          source={require("../assets/images/bg.png")}
          resizeMode="cover"
        >
          <View style={styles.seeds}>
            <Text style={styles.seed}>1. Seed</Text>
            <Text style={styles.seed}>1. Seed</Text>
            <Text style={styles.seed}>1. Seed</Text>
            <Text style={styles.seed}>1. Seed</Text>
            <Text style={styles.seed}>1. Seed</Text>
            <Text style={styles.seed}>1. Seed</Text>
            <Text style={styles.seed}>1. Seed</Text>
            <Text style={styles.seed}>1. Seed</Text>
            <Text style={styles.seed}>1. Seed</Text>
            <Text style={styles.seed}>1. Seed</Text>
            <Text style={styles.seed}>1. Seed</Text>
            <Text style={styles.seed}>1. Seed</Text>
          </View>

          <View style={styles.buttonHolder}>
            <View>
              <Text style={styles.description}>
                This seed phrase is important as it can be used to recover your
                account. Please write down in a secure place.
              </Text>
            </View>

            <Pressable
              onPress={nextHandler}
              style={
                ([({ pressed }) => pressed && styles.pressed],
                styles.nextButton)
              }
            >
              <View
                style={{
                  marginHorizontal: 10,
                }}
              >
                <Text style={styles.next}>Continue To Verify</Text>
              </View>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    color: "#111432",
  },
  nextButton: {
    backgroundColor: "#ffc000",
    padding: 5,
    borderRadius: 35,
    marginVertical: 30,
  },
  next: {
    backgroundColor: "#ffc000",
    padding: 5,
    borderRadius: 35,
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    color: "white",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 20,
  },
  buttonHolder: {
    backgroundColor: "white",
    borderRadius: 40,
    marginVertical: 30,
    paddingHorizontal: 60,
    paddingTop: 30,
    paddingBottom: 80,
    justifyContent: "center",
  },
  seeds: {
    marginHorizontal: 10,
  },
  seed: {
    color: "white",
    marginTop: 5,
    fontSize: 20,
    textAlign: "center",
    fontWeight: 900,
  },

  logo: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    flex: 1,
    backgroundColor: Color.bg,
  },
});
