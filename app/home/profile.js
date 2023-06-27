import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
function profile() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center bg-blue-500">
      <Text className="text-white text-lg">Profile Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("/signup")}>
        <Text>Go to Signup</Text>
      </TouchableOpacity>
    </View>
  );
}
export default profile;
