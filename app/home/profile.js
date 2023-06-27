import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
function profile() {
  const router = useRouter();
  return (
    <View className="flex-1 justify-center items-center bg-blue-500">
      <Text className="text-white text-lg">Profile Screen</Text>
      <TouchableOpacity onPress={() => router.replace("/signup")}>
        <Text>Go to Signup</Text>
      </TouchableOpacity>
    </View>
  );
}
export default profile;
