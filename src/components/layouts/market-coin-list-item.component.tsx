import React, { memo, useRef } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { EColors, EFonts, EFontSize, moderateScale } from '$constants/styles.constants';
import { IMarketCoin } from '$types/api-types';
import { CoinDetailsModal } from '$components/modals';
import { formatNumber } from '$utils/helpers';

interface MarketCoinListItemProps {
    element: IMarketCoin;
}

const MarketCoinListItem: React.FC<MarketCoinListItemProps> = ({
    element
}) => {

    const modalSheetRef = useRef<any>(null)

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.5}
            onPress={() => modalSheetRef.current?.open(element.id)}
            accessibilityLabel={`View details for ${element.name}`}
        >
            <>
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
                            <Text numberOfLines={1} style={styles.labelStyle}>{element.name}</Text>
                            <Text numberOfLines={1} style={styles.shortLabelStyle}>{element.symbol}</Text>
                        </View>
                    </View>

                    <View style={styles.chartPriceWrapper}>
                        <View style={styles.price}>
                            <Text numberOfLines={1} style={styles.amountStyle}>{formatNumber(element.current_price, { currency: 'USD', style: 'currency' })}</Text>
                            <Text numberOfLines={1} style={styles.marketCap}>{formatNumber(element.total_volume, { currency: 'USD', style: 'currency' })}</Text>
                        </View>
                    </View>
                </View>

                <CoinDetailsModal ref={modalSheetRef} />
            </>
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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    info: {
        justifyContent: 'center'
    },
    sparkLine: {
        height: moderateScale(50),
        width: moderateScale(80)
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
        justifyContent: 'flex-end',
        gap: moderateScale(10),
        flex: 1
    }
});

export default memo(MarketCoinListItem);