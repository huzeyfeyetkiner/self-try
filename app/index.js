import { View, Text } from "react-native";
import { Link } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";

function home() {
  return (
    <View className="flex-1 justify-center items-center bg-red-500">
      <Text style={{ color: "red" }}>Onboarding screen</Text>
      <Link href="/signup">Route to Signup</Link>
      <Link href="/login">Route to Login</Link>
    </View>
  );
}
export default home;

NativeWindStyleSheet.setOutput({
  default: "native",
});
