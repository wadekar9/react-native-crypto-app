import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DEVICE_HEIGHT, DEVICE_WIDTH, EColors, EFonts, EFontSize, moderateScale } from '$constants/styles.constants'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { CloseCircle } from '$assets/icons'
import { IconButton } from '$components/common'

interface CoinDetailsModalSkeletonProps {
    onRequestClose: () => void;
}

const CoinDetailsModalSkeleton: React.FC<CoinDetailsModalSkeletonProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: moderateScale(12), width: '100%' }}>
                <View style={{ flexGrow: 1, flexShrink: 1 }}>
                    <SkeletonPlaceholder borderRadius={4}>
                        <View style={styles.header}>
                            <View style={[styles.header, { justifyContent: 'flex-start', flex: 1 }]}>
                                <View style={styles.icon} />
                                <View style={{ flexGrow: 1, flexShrink: 1, overflow: 'hidden', gap: moderateScale(5) }}>
                                    <Text style={styles.title} />
                                    <View style={{ width: 40, height: 15 }} />
                                </View>
                            </View>

                            <View style={[styles.header, { justifyContent: 'center' }]}>
                                <View style={{ width: moderateScale(24), height: moderateScale(24) }} />
                            </View>
                        </View>
                    </SkeletonPlaceholder>
                </View>

                <IconButton onPress={() => props.onRequestClose()}>
                    <CloseCircle fill={EColors.GREY} width={moderateScale(24)} height={moderateScale(24)} />
                </IconButton>
            </View>

            <View style={[styles.container, { padding: 0 }]}>
                <SkeletonPlaceholder borderRadius={4}>
                    <View style={{ gap: moderateScale(16) }}>
                        <View style={styles.priceContainer}>
                            <View style={{ width: 200, height: 20 }} />
                            <View style={{ width: 100, height: 20 }} />
                        </View>

                        <View style={{ width: DEVICE_WIDTH - moderateScale(40), height: DEVICE_HEIGHT * 0.5 }} />

                        <View style={{ width: 200, height: 10 }} />
                        <View style={{ width: 100, height: 10 }} />

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            {Array.from({ length: 6 }).map((_, idx) => (
                                <View key={`${idx}`} style={{ width: 50, height: 30, borderRadius: 100 }} />
                            ))}
                        </View>
                    </View>
                </SkeletonPlaceholder>
            </View>
        </View>
    )
}

export default CoinDetailsModalSkeleton

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        padding: moderateScale(20),
        gap: moderateScale(16),

    },
    section: {
        width: '100%',
        padding: moderateScale(20),
        gap: moderateScale(16)
    },
    header: {
        flexShrink: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: moderateScale(12)
    },
    icon: {
        width: moderateScale(55),
        height: moderateScale(55),
        aspectRatio: 1
    },
    title: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.XL,
        color: EColors.BLACK
    },
    priceContainer: {
        gap: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})