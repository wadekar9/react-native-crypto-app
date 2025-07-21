import React from 'react';
import { View, StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const TrendingHomeScreenSkeleton = () => {
    return (
        <View style={styles.container}>
            <SkeletonPlaceholder borderRadius={8}>
                <>
                    {/* Section Header */}
                    <View style={styles.sectionHeader}>
                        <View style={styles.sectionTitle} />
                        <View style={styles.viewAll} />
                    </View>

                    {/* Crypto Cards */}
                    {[...Array(5)].map((_, i) => (
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

                    {/* NFT Section Header */}
                    <View style={styles.sectionHeader}>
                        <View style={styles.sectionTitle} />
                        <View style={styles.viewAll} />
                    </View>

                    {/* NFT Cards */}
                    {[...Array(5)].map((_, i) => (
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
        flexGrow: 1,
        paddingHorizontal: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    timeBox: {
        width: 60,
        height: 20,
        borderRadius: 4,
    },
    iconBox: {
        width: 40,
        height: 20,
        borderRadius: 4,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
        marginTop: 12,
    },
    sectionTitle: {
        width: 160,
        height: 15,
    },
    viewAll: {
        width: 50,
        height: 15,
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

export default TrendingHomeScreenSkeleton;