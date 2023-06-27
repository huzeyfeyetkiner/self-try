import { useNavigation } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
const randomScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 justify-center items-center relative">
      <TouchableOpacity
        className="absolute top-10 left-5 bg-dark"
        onPress={() => navigation.goBack()}
      >
        <Text>Back</Text>
      </TouchableOpacity>

      <Text>randomScreen</Text>
    </View>
  );
};
export default randomScreen;
