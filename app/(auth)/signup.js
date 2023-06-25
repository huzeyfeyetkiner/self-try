import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";

function signup() {
  return (
    <View>
      <Stack.Screen options={{ title: "Signup" }} />
      <Text>Signup Screen</Text>
      <Link href="/login">Route to Login</Link>
      <Link href="/home">Route to home</Link>
    </View>
  );
}
export default signup;
