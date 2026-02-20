import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { Colors } from '../../constants/Colors';

const { width } = Dimensions.get('window');

const CardGrid = () => {
    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const cards = [
        { id: 1, title: 'Sales', value: '$12,450', icon: 'trending-up' as const, color: '#4ade80' },
        { id: 2, title: 'Orders', value: '156', icon: 'shopping-cart' as const, color: '#3b82f6' },
        { id: 3, title: 'Inventory', value: '1,024', icon: 'inventory-2' as const, color: '#f59e0b' },
        { id: 4, title: 'Customers', value: '482', icon: 'people' as const, color: '#8b5cf6' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.grid}>
                {cards.map((item) => (
                    <Pressable key={item.id} style={[styles.card, { backgroundColor: theme.cardBackground }]}>
                        <View style={[styles.iconCircle, { backgroundColor: `${item.color}15` }]}>
                            <MaterialIcons name={item.icon} size={24} color={item.color} />
                        </View>
                        <Text style={[styles.cardTitle, { color: theme.textMuted }]}>{item.title}</Text>
                        <Text style={[styles.cardValue, { color: theme.text }]}>{item.value}</Text>
                    </Pressable>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        width: '100%',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // Spacing between cards
        gap: 12,
        justifyContent: 'space-between',
    },
    card: {
        // backgroundColor is set dynamically in the component
        // Calculated width: (100% / 2) - half the gap
        width: (width - 32 - 12) / 2,
        padding: 20,
        borderRadius: 16,
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        // Elevation for Android
        elevation: 3,
    },
    iconCircle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: '500',
    },
    cardValue: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 4,
    },
});

export default CardGrid;