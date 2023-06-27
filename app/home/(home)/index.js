import { View, Text, TouchableOpacity } from "react-native";
import { Link, useNavigation } from "expo-router";
const index = () => {
  const navigate = useNavigation();

  return (
    <View className="flex-1 justify-center items-center text-white bg-blue-500 p-4 ">
      <TouchableOpacity className="text-white bg-red-500 p-4 w-50 mb-5">
        <Link href="./cookAi">cookAi</Link>
      </TouchableOpacity>

      <TouchableOpacity
        className="text-white bg-red-500 p-4 w-50"
        onPress={() => navigate.navigate("ocrScreen")}
      >
        <Text>OCR Screen</Text>
      </TouchableOpacity>
    </View>
  );
};
export default index;
