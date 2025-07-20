import React, { memo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { EColors, EFonts, EFontSize, moderateScale } from '$constants/styles.constants';
import { EStackScreens } from '$constants/screens.constants';
import { IMarketCoin } from '$types/api-types';
import { navigationRef } from '$types/navigation';

interface MarketCoinListItemProps {
    element: IMarketCoin;
}

const MarketCoinListItem: React.FC<MarketCoinListItemProps> = ({
    element
}) => {

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.5}
            onPress={() => navigationRef.current?.navigate(EStackScreens.COIN_DETAILS)}
            accessibilityLabel={`View details for ${element.name}`}
        >
            <View style={styles.iconWrapper}>
                <Image
                    source={{ uri: element.image }}
                    style={styles.icon}
                    resizeMode="cover"
                    accessibilityLabel={`${element.name} icon`}
                />
            </View>

            <View style={{ flexDirection: 'row', flexGrow: 1, flex: 1 }}>
                <View style={styles.content}>
                    <View style={styles.info}>
                        <Text numberOfLines={1} style={styles.labelStyle}>
                            {element.name}
                        </Text>
                        <Text numberOfLines={1} style={styles.shortLabelStyle}>
                            {element.symbol}
                        </Text>
                    </View>
                </View>

                <View style={styles.chartPriceWrapper}>
                    <View style={styles.sparkLine}>
                        {/* <SvgUri
                            width={moderateScale(80)}
                            height={moderateScale(40)}
                            uri={element.sparkline}
                        /> */}
                    </View>

                    <View style={styles.price}>
                        <Text style={styles.amountStyle}>${element.current_price}</Text>
                        <Text style={styles.marketCap}>
                            #{element.market_cap_rank}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: moderateScale(6),
        gap: moderateScale(8),
        width: '100%',
        backgroundColor: EColors.WHITE,
        borderRadius: moderateScale(5),
        borderWidth: moderateScale(1.5),
        borderColor: EColors.BORDER_COLOR
    },
    iconWrapper: {
        width: moderateScale(40),
        height: moderateScale(40),
        aspectRatio: 1
    },
    icon: {
        width: '100%',
        height: '100%',
        aspectRatio: 1,
    },
    content: {
        flex: 0.50,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    info: {
        justifyContent: 'center'
    },
    sparkLine: {
    },
    price: {
        alignSelf: 'flex-end',
        justifyContent: 'center',
        gap: moderateScale(5)
    },
    labelStyle: {
        fontFamily: EFonts.SEMI_BOLD,
        fontSize: EFontSize.LG,
        color: EColors.PRIMARY_BLACK_COLOR,
        textAlign: 'left',
        flex: 1
    },
    shortLabelStyle: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.XS,
        color: EColors.GREY,
        textAlign: 'left',
        flex: 1
    },
    amountStyle: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.XL,
        color: EColors.DARK_GREY,
        textAlign: 'right',
    },
    marketCap: {
        fontFamily: EFonts.SEMI_BOLD,
        fontSize: EFontSize.SM,
        textAlign: 'right',
    },
    chartPriceWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: moderateScale(10),
        flex: 0.6
    }
});

export default memo(MarketCoinListItem);