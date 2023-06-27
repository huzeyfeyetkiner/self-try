import { Slot, Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="cookAi"
        options={{ presentation: "containedModal", headerTitle: "Cook Ai" }}
      />
    </Stack>
  );
}
