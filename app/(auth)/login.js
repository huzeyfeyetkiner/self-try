import { View, Text } from "react-native-web";
import { Link } from "expo-router";

function login() {
  return (
    <View>
      <Text>Login Screen</Text>
      <Link href="/signup">Signup Screen</Link>
      <Link href="/home">Home Screen</Link>
    </View>
  );
}
export default login;
