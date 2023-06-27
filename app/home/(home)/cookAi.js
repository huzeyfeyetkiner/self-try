import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation } from "expo-router";

const cookAi = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 justify-center items-center relative bg-purple-800">
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity
        className="absolute top-10 left-5 bg-white"
        onPress={() => navigation.goBack()}
      >
        <Text>Back</Text>
      </TouchableOpacity>

      <Text>Modal Layout Try</Text>
    </SafeAreaView>
  );
};
export default cookAi;
