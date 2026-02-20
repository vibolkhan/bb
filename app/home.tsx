import { MaterialIcons as Icon } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react';
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    useColorScheme
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';
import { Colors } from '../constants/Colors';

const { width } = Dimensions.get('window');

const KPICard = ({ title, value, trend, icon, color, isAlert, theme }) => (
    <View style={[
        styles.kpiCard,
        { backgroundColor: theme.cardBackground, borderColor: theme.border },
        isAlert && { borderColor: theme.cardAlertBorder, backgroundColor: theme.cardAlertBg }
    ]}>
        <View style={styles.cardHeader}>
            <View style={[styles.iconContainer, { backgroundColor: `${color}20` }]}>
                <Icon name={icon} size={20} color={color} />
            </View>
            {trend && (
                <View style={[styles.trendBadge, { backgroundColor: `${color}15` }]}>
                    <Text style={[styles.trendText, { color: color }]}>{trend}</Text>
                </View>
            )}
        </View>
        <View style={styles.cardContent}>
            <Text style={[styles.cardLabel, { color: theme.textMuted }]}>{title}</Text>
            <Text style={[styles.cardValue, { color: isAlert ? '#ef4444' : theme.text }]}>{value}</Text>
        </View>
    </View>
);

const Home = () => {
    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            <Stack.Screen options={{ headerShown: false }} />
            {/* Header */}
            <View style={[styles.header, { backgroundColor: theme.background }]}>
                <TouchableOpacity><Icon name="menu" size={28} color={theme.text} /></TouchableOpacity>
                <Text style={[styles.headerTitle, { color: theme.text }]}>Dashboard</Text>
                <TouchableOpacity>
                    <Icon name="notifications-none" size={28} color={theme.text} />
                    <View style={styles.notifDot} />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Segmented Control */}
                <View style={[styles.segmentedControl, { backgroundColor: theme.containerBg }]}>
                    <TouchableOpacity style={[styles.segmentBtn, { backgroundColor: theme.activeBg }, styles.segmentActive]}>
                        <Text style={[styles.segmentTextActive, { color: theme.text }]}>Today</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.segmentBtn}>
                        <Text style={[styles.segmentText, { color: theme.textMuted }]}>This Month</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.segmentBtn}>
                        <Text style={[styles.segmentText, { color: theme.textMuted }]}>Custom</Text>
                    </TouchableOpacity>
                </View>

                {/* KPI Grid */}
                <View style={styles.grid}>
                    <KPICard title="TOTAL SALES" value="$12,450.00" trend="+12%" icon="trending-up" color="#4ade80" theme={theme} />
                    <KPICard title="PROFIT EST." value="+$3,200.50" trend="+5%" icon="payments" color="#3b82f6" theme={theme} />
                    <KPICard title="EXPENSES" value="$4,320.10" icon="receipt-long" color="#f97316" theme={theme} />
                    <KPICard title="LOW STOCK" value="8 Items" icon="warning" color="#ef4444" isAlert={true} theme={theme} />
                </View>

                {/* Sales Trend Chart */}
                <View style={[styles.chartSection, { backgroundColor: theme.cardBackground }]}>
                    <View style={styles.chartHeader}>
                        <Text style={[styles.sectionTitle, { color: theme.text }]}>Sales Trend</Text>
                        <View style={styles.inlineTrend}>
                            <Icon name="arrow-upward" size={14} color="#4ade80" />
                            <Text style={styles.inlineTrendText}>8.4%</Text>
                        </View>
                    </View>

                    <View style={styles.svgContainer}>
                        <Svg height="100" width={width - 64} viewBox="0 0 400 100">
                            <Defs>
                                <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                                    <Stop offset="0" stopColor="#4ade80" stopOpacity="0.2" />
                                    <Stop offset="1" stopColor="#4ade80" stopOpacity="0" />
                                </LinearGradient>
                            </Defs>
                            <Path
                                d="M0,80 Q50,70 80,50 T160,30 T240,60 T320,20 T400,10"
                                fill="none"
                                stroke="#4ade80"
                                strokeWidth="3"
                            />
                            <Path
                                d="M0,80 Q50,70 80,50 T160,30 T240,60 T320,20 T400,10 V100 H0 Z"
                                fill="url(#grad)"
                            />
                        </Svg>
                        <View style={styles.chartLabels}>
                            <Text style={[styles.labelDark, { color: theme.textMuted }]}>08:00</Text>
                            <Text style={[styles.labelDark, { color: theme.textMuted }]}>12:00</Text>
                            <Text style={[styles.labelDark, { color: theme.textMuted }]}>16:00</Text>
                            <Text style={[styles.labelDark, { color: theme.textMuted }]}>20:00</Text>
                        </View>
                    </View>
                </View>

                {/* Quick Actions */}
                <View style={styles.quickActions}>
                    <Text style={[styles.sectionTitle, { color: theme.text }]}>Quick Actions</Text>
                    <View style={styles.actionRow}>
                        {['add-shopping-cart', 'inventory-2', 'description', 'group'].map((icon, i) => (
                            <TouchableOpacity key={i} style={styles.actionItem}>
                                <View style={[styles.actionIconBg, { backgroundColor: theme.actionIconBg }]}>
                                    <Icon name={icon as any} size={24} color={theme.text} />
                                </View>
                                <Text style={[styles.actionText, { color: theme.text }]}>Action</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Nav */}
            <View style={[styles.bottomNav, { backgroundColor: theme.background, borderColor: theme.border }]}>
                <Icon name="dashboard" size={24} color="#4ade80" />
                <Icon name="inventory" size={24} color={theme.icon} />
                <TouchableOpacity style={styles.fab}>
                    <Icon name="point-of-sale" size={28} color="#fff" />
                </TouchableOpacity>
                <Icon name="analytics" size={24} color={theme.icon} />
                <Icon name="more-horiz" size={24} color={theme.icon} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    headerTitle: { fontSize: 18, fontWeight: '700' },
    notifDot: {
        position: 'absolute',
        top: 2,
        right: 2,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ef4444'
    },
    scrollContent: { paddingBottom: 100 },
    segmentedControl: {
        flexDirection: 'row',
        margin: 16,
        borderRadius: 12,
        padding: 4
    },
    segmentBtn: { flex: 1, paddingVertical: 8, alignItems: 'center', borderRadius: 8 },
    segmentActive: { elevation: 2 },
    segmentTextActive: { fontWeight: '600', fontSize: 13 },
    segmentText: { fontSize: 13 },
    grid: { flexDirection: 'row', flexWrap: 'wrap', padding: 8 },
    kpiCard: {
        width: '45%',
        margin: '2.5%',
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
    },
    cardHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
    iconContainer: { padding: 8, borderRadius: 20 },
    trendBadge: { paddingHorizontal: 6, paddingVertical: 2, borderRadius: 10 },
    trendText: { fontSize: 10, fontWeight: '700' },
    cardLabel: { fontSize: 10, fontWeight: '600', marginBottom: 4 },
    cardValue: { fontSize: 18, fontWeight: '700' },
    cardContent: { flex: 1 },
    chartSection: { margin: 16, padding: 16, borderRadius: 16 },
    sectionTitle: { fontSize: 16, fontWeight: '700', marginBottom: 12 },
    chartHeader: { flexDirection: 'row', justifyContent: 'space-between' },
    inlineTrend: { flexDirection: 'row', alignItems: 'center' },
    inlineTrendText: { color: '#4ade80', fontWeight: '700', fontSize: 12, marginLeft: 4 },
    chartLabels: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
    labelDark: { fontSize: 10 },
    svgContainer: { alignItems: 'center' },
    quickActions: { padding: 16 },
    actionRow: { flexDirection: 'row', justifyContent: 'space-between' },
    actionItem: { alignItems: 'center' },
    actionIconBg: { width: 48, height: 48, borderRadius: 24, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
    actionText: { fontSize: 10 },
    bottomNav: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 30,
        paddingTop: 12,
        borderTopWidth: 1,
    },
    fab: {
        backgroundColor: '#4ade80',
        width: 56,
        height: 56,
        borderRadius: 28,
        marginTop: -40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4
    }
});

export default Home;
