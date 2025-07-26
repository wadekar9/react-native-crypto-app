import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { DEVICE_HEIGHT, DEVICE_WIDTH, EColors, EFonts, EFontSize, moderateScale } from '$constants/styles.constants';
import { ICoinDetailsDto } from '$utils/dto';
import { IconButton } from '$components/common';
import { CloseCircle, HeartFill, HeartOutline } from '$assets/icons';
import { formatNumber } from '$utils/helpers';

const CoinDetailsHeaderSection: React.FC<{
    details: ICoinDetailsDto | null;
    isFavourite: boolean;
    onToggleFavourite: () => void;
    onClose: () => void;
}> = (props) => {

    const { details, isFavourite, onToggleFavourite, onClose } = props;

    return (
        <View style={styles.section}>
            <View style={styles.header}>
                <View style={[styles.header, { justifyContent: 'flex-start', flex: 1 }]}>
                    <View style={styles.icon}>
                        {details?.image.large && (
                            <Image style={styles.iconImage} source={{ uri: details.image.large }} />
                        )}
                    </View>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.title}>
                            {details?.name} <Text style={styles.symbol}>({details?.symbol?.toUpperCase()})</Text>
                        </Text>
                        <Text style={styles.rank}>#{details?.market_cap_rank}</Text>
                    </View>
                </View>
                <View style={[styles.header, { justifyContent: 'center' }]}>
                    <IconButton onPress={onToggleFavourite}>
                        {isFavourite ? (
                            <HeartFill fill={EColors.PINK} width={moderateScale(24)} height={moderateScale(24)} />
                        ) : (
                            <HeartOutline width={moderateScale(24)} height={moderateScale(24)} />
                        )}
                    </IconButton>
                    <IconButton onPress={onClose}>
                        <CloseCircle fill={EColors.GREY} width={moderateScale(24)} height={moderateScale(24)} />
                    </IconButton>
                </View>
            </View>
            {details?.market_data?.current_price?.usd && (
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>
                        {formatNumber(details.market_data.current_price.usd, { style: 'currency', currency: 'USD' })}
                    </Text>
                    <Text
                        style={[
                            styles.priceChange,
                            { color: details.market_data.price_change_24h < 0 ? EColors.RED : EColors.GREEN },
                        ]}
                    >
                        {formatNumber(details.market_data.price_change_24h, { style: 'currency', currency: 'USD' })} (
                        {details.market_data.price_change_percentage_24h}%)
                    </Text>
                </View>
            )}
        </View>
    )
};

export default CoinDetailsHeaderSection

const styles = StyleSheet.create({
    section: {
        width: '100%',
        padding: moderateScale(20),
        gap: moderateScale(16),
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: moderateScale(12),
    },
    icon: {
        width: moderateScale(55),
        height: moderateScale(55),
        overflow: 'hidden'
    },
    iconImage: {
        width: '100%',
        height: '100%',
    },
    headerTextContainer: {
        flexGrow: 1,
        flexShrink: 1,
        gap: moderateScale(2),
    },
    title: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.XL,
        color: EColors.BLACK,
    },
    symbol: {
        textTransform: 'uppercase',
    },
    rank: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.BASE,
        color: EColors.GREY,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(10),
    },
    price: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize['3XL'] - 2,
        color: EColors.BLACK,
    },
    priceChange: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.XL,
    }
});