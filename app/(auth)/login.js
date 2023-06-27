import { View, Text, TouchableOpacity } from "react-native";
import { Link, useNavigation } from "expo-router";

function login() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center relative">
      <TouchableOpacity
        className="absolute top-10 left-5 bg-red-700"
        onPress={() => navigation.goBack()}
      >
        <Text>Back</Text>
      </TouchableOpacity>

      <Text>Login Screen</Text>
      <Link href="/signup">Signup Screen</Link>
      <Link href="/home">Home Screen</Link>
    </View>
  );
}
export default login;
