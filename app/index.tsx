import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomePage from "./Home";

export default function Index() {
  return (
    <SafeAreaProvider>
      <HomePage />
    </SafeAreaProvider>
  );
}
