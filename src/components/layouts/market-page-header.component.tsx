import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchIcon } from '$assets/icons';
import { IconButton } from '$components/common';
import { navigationRef } from '$types/navigation';
import { EColors, EFonts, EFontSize, moderateScale } from '$constants/styles.constants';
import { EStackScreens } from '$constants/screens.constants';
import { IGlobalMarketData } from '$types/api-types';

interface MarketPageHeaderProps {
    marketDetails: IGlobalMarketData | null;
}

const MarketPageHeader: React.FC<MarketPageHeaderProps> = ({ marketDetails }) => {

    const marketValue = marketDetails ? +(marketDetails?.market_cap_change_percentage_24h_usd.toFixed(2)) : 0

    return (
        <>
            {marketDetails && (
                <View style={styles.headerWrapper}>
                    <View style={styles.header}>
                        <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                            <Text style={styles.headerTitle}>{`Market is ${marketValue < 0 ? 'down' : 'up'} `}<Text style={{ color: marketValue < 0 ? EColors.RED : EColors.GREEN }}>{Math.abs(marketValue)}%</Text></Text>
                            <Text style={styles.headerSpan}>In the past 24 hours</Text>
                        </View>
                        <IconButton
                            style={styles.icon}
                            onPress={() => navigationRef.current?.navigate(EStackScreens.SEARCH)}
                        >
                            <SearchIcon />
                        </IconButton>
                    </View>
                    <View style={styles.metrics}>
                        <View style={styles.metric}>
                            <Text style={styles.metricText}>
                                Coins:&nbsp;<Text style={styles.metricValue}>{marketDetails?.active_cryptocurrencies || '-'}</Text>
                            </Text>
                        </View>
                        <View style={styles.metric}>
                            <Text style={styles.metricText}>
                                Exchanges:&nbsp;<Text style={styles.metricValue}>{marketDetails?.markets || '-'}</Text>
                            </Text>
                        </View>
                        <View style={styles.metric}>
                            <Text style={styles.metricText}>
                                Dominance:&nbsp;
                                <Text style={styles.metricValue}>
                                    {Object.keys(marketDetails?.market_cap_percentage || {})
                                        .slice(0, 2)
                                        .map((cap) => `${cap} ${marketDetails?.market_cap_percentage[cap].toFixed(2)}%`)
                                        .join(' ')}
                                </Text>
                            </Text>
                        </View>
                    </View>
                </View>
            )}
        </>
    );
};

export default React.memo(MarketPageHeader);

export const styles = StyleSheet.create({
    headerWrapper: {
        paddingHorizontal: moderateScale(20),
        paddingVertical: moderateScale(10),
        gap: moderateScale(15)
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: moderateScale(50),
        height: moderateScale(50),
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        fontFamily: EFonts.SEMI_BOLD,
        fontSize: moderateScale(22),
        color: EColors.PRIMARY_BLACK_COLOR,
    },
    headerSpan: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.SM,
        color: EColors.GREY
    },
    metrics: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: moderateScale(5),
        width: '100%'
    },
    metric: {
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(5),
        backgroundColor: EColors.BACKGROUND_COLOR,
        borderRadius: moderateScale(100),
        borderWidth: 1,
        borderColor: EColors.BORDER_COLOR
    },
    metricText: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.LG,
        color: EColors.GREY
    },
    metricValue: {
        fontFamily: EFonts.SEMI_BOLD,
        color: EColors.PRIMARY_COLOR,
        textTransform: 'uppercase'
    }
});