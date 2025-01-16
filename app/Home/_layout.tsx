import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, statusBarHidden: true }}>
      <Stack.Screen name="Home" />
    </Stack>
  );
}
