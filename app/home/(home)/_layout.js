import { Slot, Stack } from "expo-router";

export default function ModalLayout() {
  return (
    <Stack screenOptions={{ animation: "fade_from_bottom" }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="cookAi"
        options={{ presentation: "modal", headerShown: false }}
      />
    </Stack>
  );
}
