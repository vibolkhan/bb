import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { Colors } from '../../constants/Colors';

const SegmentedControl = () => {
    const [activeTab, setActiveTab] = useState('Today');
    const tabs = ['Today', 'This Month', 'Custom'];

    const colorScheme = useColorScheme();
    const globalTheme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const theme = {
        primary: globalTheme.primary,
        background: globalTheme.background,
        containerBg: globalTheme.containerBg,
        activeBg: globalTheme.activeBg,
        activeText: globalTheme.text,
        inactiveText: globalTheme.textMuted,
    };

    return (
        <View style={[styles.outerContainer, { backgroundColor: theme.background }]}>
            <View style={[styles.innerContainer, { backgroundColor: theme.containerBg }]}>
                {tabs.map((tab) => {
                    const isActive = activeTab === tab;

                    return (
                        <Pressable
                            key={tab}
                            onPress={() => setActiveTab(tab)}
                            style={[
                                styles.segment,
                                isActive && [styles.activeSegment, { backgroundColor: theme.activeBg }]
                            ]}
                        >
                            <Text
                                style={[
                                    styles.segmentText,
                                    { color: isActive ? theme.activeText : theme.inactiveText }
                                ]}
                            >
                                {tab}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        width: '100%',
    },
    innerContainer: {
        flexDirection: 'row',
        height: 44,
        borderRadius: 22,
        padding: 4,
        alignItems: 'center',
    },
    segment: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
    },
    activeSegment: {
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        // Elevation for Android
        elevation: 2,
    },
    segmentText: {
        fontSize: 14,
        fontWeight: '600',
    },
});

export default SegmentedControl;