import { StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";

export const App = () => {
  return (
    <View style={styles.container}>
      <Text>Power of self learnin</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
