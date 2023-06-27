import { Slot, Stack } from "expo-router";

export default function ModalLayout() {
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
        options={{ presentation: "modal", headerShown: false }}
      />
    </Stack>
  );
}
