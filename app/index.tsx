import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import CustomSplash from "../components/SplashScreen";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Hide the native splash screen after the CustomSplash component mounts
    SplashScreen.hideAsync();

    const timer = setTimeout(() => {
      router.replace("/home");
    }, 3000); // 3 seconds of "Flow"

    return () => clearTimeout(timer);
  }, []);

  return <CustomSplash />;
}
