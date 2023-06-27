import { View, Text, TouchableOpacity } from "react-native";
import { Link, useNavigation } from "expo-router";

function signup() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center relative">
      <TouchableOpacity
        className="absolute top-10 left-5 bg-red-700"
        onPress={() => navigation.goBack()}
      >
        <Text>Back</Text>
      </TouchableOpacity>

      <Text>Signup Screen</Text>
      <Link href="/login">Route to Login</Link>
      <Link href="/home">Route to home</Link>
    </View>
  );
}
export default signup;
