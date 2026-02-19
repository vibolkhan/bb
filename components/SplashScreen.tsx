import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const SplashScreen = () => {
  // Toggle this for dark mode testing
  const isDarkMode = false;

  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 2500, // 2.5 seconds for the bar to fill
      useNativeDriver: false, // width cannot use native driver
    }).start();
  }, [progress]);

  const progressBarWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  const theme = {
    background: isDarkMode ? "#122017" : "#FFFFFF",
    text: isDarkMode ? "#FFFFFF" : "#121714",
    textMuted: isDarkMode ? "#a1b5a9" : "#658671",
    primary: "#4ade80",
    progressBg: isDarkMode ? "rgba(74, 222, 128, 0.1)" : "#f0fdf4",
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />

      {/* Background Decoration Circles */}
      <View style={[styles.blurCircle, styles.topCircle]} />
      <View style={[styles.blurCircle, styles.bottomCircle]} />

      <View style={styles.content}>
        {/* Top Spacer */}
        <View style={styles.spacer} />

        {/* Central Brand Block */}
        <View style={styles.brandBlock}>
          <View
            style={[
              styles.logoContainer,
              { borderColor: `${theme.primary}33` },
            ]}
          >
            <MaterialIcons name="inventory" size={64} color={theme.primary} />
            {/* Abstract Accent Dot */}
            <View
              style={[
                styles.accentDot,
                {
                  borderColor: theme.background,
                  backgroundColor: theme.primary,
                },
              ]}
            />
          </View>

          <View style={styles.titleGroup}>
            <Text style={[styles.title, { color: theme.text }]}>
              SME <Text style={{ color: theme.primary }}>Flow</Text>
            </Text>
            <Text style={[styles.tagline, { color: theme.textMuted }]}>
              Empowering Small Business
            </Text>
          </View>
        </View>

        {/* Loading Indicator Block */}
        <View style={styles.loadingBlock}>
          <View style={styles.loadingLabelRow}>
            <Text style={[styles.initializingText, { color: theme.text }]}>
              INITIALIZING
            </Text>
            <Text style={[styles.waitText, { color: theme.textMuted }]}>
              Please wait...
            </Text>
          </View>

          {/* Progress Bar */}
          <View
            style={[
              styles.progressBarBg,
              { backgroundColor: theme.progressBg },
            ]}
          >
            <Animated.View
              style={[
                styles.progressBarFill,
                { backgroundColor: theme.primary, width: progressBarWidth },
              ]}
            />
          </View>

          {/* Footer Meta */}
          <View style={styles.footer}>
            <Text
              style={[styles.versionText, { color: `${theme.textMuted}99` }]}
            >
              V1.0.4 • SECURE SYNC
            </Text>
            <View style={styles.secureRow}>
              <MaterialIcons
                name="lock"
                size={12}
                color={`${theme.textMuted}80`}
              />
              <Text
                style={[styles.secureText, { color: `${theme.textMuted}80` }]}
              >
                Encrypted Connection
              </Text>
            </View>
          </View>
        </View>

        {/* Bottom Spacer */}
        <View style={styles.spacer} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 32,
  },
  spacer: {
    height: 48,
  },
  brandBlock: {
    alignItems: "center",
  },
  logoContainer: {
    width: 128,
    height: 128,
    backgroundColor: "rgba(74, 222, 128, 0.1)",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    marginBottom: 24,
  },
  accentDot: {
    position: "absolute",
    top: -2,
    right: -2,
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 4,
  },
  titleGroup: {
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    letterSpacing: -0.5,
  },
  tagline: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 4,
  },
  loadingBlock: {
    width: "100%",
    maxWidth: 300,
    alignItems: "center",
  },
  loadingLabelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  initializingText: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
  },
  waitText: {
    fontSize: 11,
  },
  progressBarBg: {
    height: 6,
    width: "100%",
    borderRadius: 3,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 3,
    // Note: Android elevation or iOS shadowColor can be added here
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
  },
  versionText: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2,
  },
  secureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    gap: 4,
  },
  secureText: {
    fontSize: 10,
  },
  // Background Blur Decorations
  blurCircle: {
    position: "absolute",
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: width * 0.4,
    backgroundColor: "rgba(74, 222, 128, 0.05)",
    zIndex: -1,
  },
  topCircle: {
    top: -width * 0.2,
    left: -width * 0.2,
  },
  bottomCircle: {
    bottom: -width * 0.2,
    right: -width * 0.2,
  },
});

export default SplashScreen;
