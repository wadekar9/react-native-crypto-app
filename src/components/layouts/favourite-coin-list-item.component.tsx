import React, { memo, useRef } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { EColors, EFonts, EFontSize, moderateScale } from '$constants/styles.constants';
import { ICoinDetailsDto } from '$utils/dto';
import { CoinDetailsModal } from '$components/modals';
import { formatNumber } from '$utils/helpers';

interface FavouriteCoinListItemProps {
    element: ICoinDetailsDto;
}

const FavouriteCoinListItem: React.FC<FavouriteCoinListItemProps> = ({ element }) => {
    const modalSheetRef = useRef<any>(null);

    // Safely access price, fallback to 0 if undefined
    const price = element.market_data.current_price?.usd
        ? element.market_data.current_price.usd >= 1
            ? element.market_data.current_price.usd.toFixed(2)
            : element.market_data.current_price.usd.toFixed(5)
        : '0.00';

    // Safely access price change percentage, fallback to 0
    const priceChange = element.market_data.price_change_percentage_24h ?? 0;

    // Safely access market cap rank, fallback to 'N/A'
    const marketCapRank = element.market_data.market_cap_rank ?? 'N/A';

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.5}
            onPress={() => modalSheetRef.current?.open(element.id)}
            accessibilityLabel={`View details for ${element.name}`}
            accessibilityRole="button"
        >
            <View style={styles.iconWrapper}>
                <Image
                    source={{ uri: element.image?.large || `https://dummyjson.com/image/50x50/262626/ffffff?text=${element.name}` }}
                    style={styles.icon}
                    resizeMode="cover"
                    accessibilityLabel={`${element.name} icon`}
                />
            </View>

            <View style={styles.content}>
                <View style={styles.info}>
                    <Text numberOfLines={1} style={styles.labelStyle}>
                        {element.name || 'Unknown Coin'}
                    </Text>
                    <Text numberOfLines={1} style={styles.shortLabelStyle}>
                        {element.symbol?.toUpperCase() || 'N/A'}
                    </Text>
                </View>

                <View style={styles.priceWrapper}>
                    <Text style={styles.amountStyle}>
                        {formatNumber(price, { currency: 'USD', style: 'currency' })}
                    </Text>
                    <Text
                        style={[
                            styles.priceChange,
                            { color: priceChange >= 0 ? EColors.GREEN : EColors.RED },
                        ]}
                    >
                        {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}%
                    </Text>
                    <Text style={styles.marketCap}>#{marketCapRank}</Text>
                </View>
            </View>

            <CoinDetailsModal ref={modalSheetRef} />
        </TouchableOpacity>
    );
};

export default memo(FavouriteCoinListItem);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: moderateScale(8),
        gap: moderateScale(10),
        width: '100%',
        backgroundColor: EColors.WHITE,
        borderRadius: moderateScale(5),
        borderWidth: moderateScale(1.5),
        borderColor: EColors.BORDER_COLOR,
    },
    iconWrapper: {
        width: moderateScale(40),
        height: moderateScale(40),
        aspectRatio: 1,
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
        justifyContent: 'space-between',
        gap: moderateScale(10),
    },
    info: {
        flex: 1,
        justifyContent: 'center',
    },
    priceWrapper: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: moderateScale(5),
    },
    labelStyle: {
        fontFamily: EFonts.SEMI_BOLD,
        fontSize: EFontSize.LG,
        color: EColors.PRIMARY_BLACK_COLOR,
        textAlign: 'left',
        textTransform: 'capitalize',
    },
    shortLabelStyle: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.XS,
        color: EColors.GREY,
        textAlign: 'left',
        textTransform: 'uppercase',
    },
    amountStyle: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.XL,
        color: EColors.DARK_GREY,
        textAlign: 'right',
    },
    priceChange: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.SM,
        textAlign: 'right',
    },
    marketCap: {
        fontFamily: EFonts.SEMI_BOLD,
        fontSize: EFontSize.SM,
        textAlign: 'right',
        color: EColors.GREY,
    },
});