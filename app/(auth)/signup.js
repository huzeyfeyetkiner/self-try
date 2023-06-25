import { View, Text } from "react-native";
import { Link } from "expo-router";

function signup() {
  return (
    <View>
      <Text>Signup Screen</Text>
      <Link href="/login">Route to Login</Link>
      <Link href="/home">Route to home</Link>
    </View>
  );
}
export default signup;
