import { Colors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { Pressable, View, useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="home"
          options={{
            title: 'SME Flow',
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '700',
              fontSize: 18,
              color: theme.text,
            },
            // LEFT: Hamburger Menu
            headerLeft: () => (
              <Pressable onPress={() => console.log('Menu Pressed')} style={{ marginLeft: 10 }}>
                <MaterialIcons name="menu" size={28} color={theme.text} />
              </Pressable>
            ),

            // RIGHT: Notification Icon
            headerRight: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                <Pressable onPress={() => console.log('Notification Pressed')}>
                  <MaterialIcons name="notifications" size={26} color={theme.text} />
                  {/* Optional: Small Red Dot for active notifications */}
                  <View style={{
                    position: 'absolute',
                    right: 2,
                    top: 2,
                    backgroundColor: '#ef4444',
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    borderWidth: 1.5,
                    borderColor: 'white'
                  }} />
                </Pressable>
              </View>
            ),
            headerShadowVisible: true,
            headerStyle: {
              backgroundColor: theme.background,
            },
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
