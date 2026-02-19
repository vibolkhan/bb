import { useRouter } from "expo-router";
import React, { useEffect } from "react";
// Import the component we built in the previous step
// Assuming you saved it in /components/CustomSplash.tsx
import CustomSplash from "../components/SplashScreen";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Simulate an initialization period (e.g., checking auth or syncing data)
    const timer = setTimeout(() => {
      // Replace 'home' with whatever your main route is (e.g., "(tabs)")
      // We use .replace() so the user can't "go back" to the splash screen
      router.replace("/home");
    }, 3000); // 3 seconds of "Flow"

    return () => clearTimeout(timer);
  }, []);

  return <CustomSplash />;
}
