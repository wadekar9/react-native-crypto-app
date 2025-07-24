import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { EColors, EFonts, EFontSize, moderateScale } from '$constants/styles.constants'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

const ExchangeListItemSkeleton = () => {
    return (
        <SkeletonPlaceholder
            highlightColor={EColors.WHITE}
            speed={800}
        >
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <View style={{ width: moderateScale(40), height: moderateScale(40), borderRadius: 100 }} />
                    <View style={styles.headerInfo}>
                        <View style={{ height: EFontSize.XL, width: '60%', borderRadius: 4, marginBottom: moderateScale(4) }} />
                        <View style={{ height: EFontSize.XS, width: '30%', borderRadius: 4 }} />
                    </View>
                    <View style={{ width: 22, height: 22, borderRadius: 4 }} />
                </View>

                <View style={styles.cardBody}>
                    <View style={styles.infoRow}>
                        <View style={{ height: EFontSize.SM, width: '40%', borderRadius: 4 }} />
                        <View style={[styles.scoreBadge, { borderRadius: moderateScale(12) }]} />
                    </View>

                    <View style={styles.infoRow}>
                        <View style={{ height: EFontSize.SM, width: '40%', borderRadius: 4 }} />
                        <View style={{ height: EFontSize.SM, width: '30%', borderRadius: 4 }} />
                    </View>

                    <View style={styles.infoRow}>
                        <View style={{ height: EFontSize.SM, width: '40%', borderRadius: 4 }} />
                        <View style={{ height: EFontSize.SM, width: '30%', borderRadius: 4 }} />
                    </View>

                    <View style={{ height: moderateScale(18) * 3, width: '100%', borderRadius: 4, marginTop: moderateScale(5) }} />
                </View>
            </View>
        </SkeletonPlaceholder>
    )
}

export default ExchangeListItemSkeleton


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: moderateScale(12),
        padding: moderateScale(15),
        borderWidth: moderateScale(2),
        borderColor: EColors.BORDER_COLOR,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: moderateScale(15),
        gap: moderateScale(10)
    },
    logo: {
        width: moderateScale(40),
        height: moderateScale(40),
        marginRight: moderateScale(12),
    },
    headerInfo: {
        flex: 1,
    },
    name: {
        fontSize: EFontSize.XL,
        fontFamily: EFonts.SEMI_BOLD,
        color: '#2c3e50',
    },
    rank: {
        fontSize: EFontSize.XS,
        fontFamily: EFonts.MEDIUM,
        color: EColors.GREY,
        marginTop: moderateScale(2),
    },
    cardBody: {
        gap: moderateScale(8),
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontSize: EFontSize.SM,
        fontFamily: EFonts.MEDIUM,
        color: EColors.GREY,
    },
    value: {
        fontSize: EFontSize.SM,
        fontFamily: EFonts.MEDIUM,
        color: EColors.DARK_GREY,
    },
    scoreBadge: {
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(4),
        borderRadius: moderateScale(12),
    },
    scoreText: {
        fontSize: moderateScale(12),
        fontFamily: EFonts.MEDIUM,
        color: EColors.WHITE,
    },
    description: {
        fontSize: EFontSize.XS,
        fontFamily: EFonts.MEDIUM,
        color: EColors.DARK_GREY,
        lineHeight: moderateScale(18),
        marginTop: moderateScale(5),
    },
});