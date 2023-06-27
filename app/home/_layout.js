import { Tabs, Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="(home)" options={{ tabBarLabel: "Home" }} />
      <Tabs.Screen name="menu" options={{ tabBarLabel: "Menu" }} />
      <Tabs.Screen name="fridge" options={{ tabBarLabel: "Fridge" }} />
      <Tabs.Screen name="profile" options={{ tabBarLabel: "Profile" }} />
    </Tabs>
  );
}
