import { View, Text } from "react-native-web";
import { Link, Stack } from "expo-router";

function login() {
  return (
    <View>
      <Stack.Screen options={{ title: "Login" }} />
      <Text>Login Screen</Text>
      <Link href="/signup">Signup Screen</Link>
      <Link href="/home">Home Screen</Link>
    </View>
  );
}
export default login;
