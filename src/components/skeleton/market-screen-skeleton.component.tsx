import React from 'react';
import { View, StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const MarketOverviewSkeleton = () => {
    return (
        <View style={styles.container}>
            <SkeletonPlaceholder borderRadius={8}>
                <>
                    {/* Top Status Row */}
                    <View style={styles.topRow}>
                        <View style={styles.timeBox} />
                        <View style={styles.iconBox} />
                    </View>

                    {/* Market Status */}
                    <View style={styles.marketStatus}>
                        <View style={styles.statusTitle} />
                        <View style={styles.statusSubtitle} />
                    </View>

                    {/* Stats Row */}
                    <View style={styles.statsRow}>
                        <View style={styles.statBadge} />
                        <View style={styles.statBadge} />
                    </View>
                    <View style={styles.dominanceBadge} />

                    {/* Tabs */}
                    <View style={styles.tabsRow}>
                        <View style={styles.tab} />
                        <View style={styles.tab} />
                        <View style={styles.tab} />
                        <View style={styles.tab} />
                    </View>

                    {/* Crypto List */}
                    {[...Array(7)].map((_, i) => (
                        <View key={`${i}`} style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.icon} />
                                <View style={styles.textGroup}>
                                    <View style={styles.title} />
                                    <View style={styles.subtitle} />
                                </View>
                                <View style={styles.chart} />
                                <View style={styles.bottomRow}>
                                    <View style={styles.price} />
                                    <View style={styles.percentage} />
                                </View>
                            </View>
                        </View>
                    ))}
                </>
            </SkeletonPlaceholder>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FB',
        padding: 16,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    timeBox: {
        width: 60,
        height: 20,
    },
    iconBox: {
        width: 25,
        height: 25,
        borderRadius: 12.5,
    },
    marketStatus: {
        marginBottom: 12,
    },
    statusTitle: {
        width: 180,
        height: 20,
        marginBottom: 6,
    },
    statusSubtitle: {
        width: 160,
        height: 14,
    },
    statsRow: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 12,
        marginBottom: 6,
    },
    statBadge: {
        width: 130,
        height: 28,
        borderRadius: 14,
    },
    dominanceBadge: {
        width: 260,
        height: 28,
        borderRadius: 14,
        marginBottom: 16,
    },
    tabsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    tab: {
        width: 80,
        height: 28,
        borderRadius: 14,
    },
    card: {
        width: '100%',
        padding: 8
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    textGroup: {
        marginLeft: 12
    },
    title: {
        width: 80,
        height: 12,
        borderRadius: 4
    },
    subtitle: {
        width: 40,
        height: 10,
        marginTop: 6,
        borderRadius: 4
    },
    chart: {
        width: 80,
        height: 40,
        margin: 'auto',
        borderRadius: 6
    },
    bottomRow: {
        gap: 5,
        alignItems: "flex-end"
    },
    price: {
        width: 80,
        height: 12,
        borderRadius: 4
    },
    percentage: {
        width: 40,
        height: 10,
        borderRadius: 4
    }
});

export default MarketOverviewSkeleton;