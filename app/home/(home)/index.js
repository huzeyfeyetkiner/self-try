import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
const index = () => {
  return (
    <View className="flex-1 justify-center items-center text-white bg-blue-500 p-4 w-50">
      <TouchableOpacity className="text-white bg-red-500 p-4 w-50">
        <Link href="./cookAi">cookAi</Link>
      </TouchableOpacity>
    </View>
  );
};
export default index;
