import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
const ocrScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center relative">
      <TouchableOpacity
        className="absolute top-10 left-5 bg-dark"
        onPress={() => navigation.goBack()}
      >
        <Text>Back</Text>
      </TouchableOpacity>

      <Text>OCR Screen</Text>
    </View>
  );
};
export default ocrScreen;
