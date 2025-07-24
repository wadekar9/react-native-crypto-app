import { Image, Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IExchange } from '$types/api-types';
import { LinkIcon } from '$assets/icons';
import { EColors, EFonts, EFontSize, moderateScale } from '$constants/styles.constants';
import { IconButton } from '$components/common';

interface IExchangeListProp {
    element: IExchange
}

const ExchangeListItem: React.FC<IExchangeListProp> = ({ element }) => {

    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Image source={{ uri: element.image }} style={styles.logo} />
                <View style={styles.headerInfo}>
                    <Text style={styles.name}>{element.name}</Text>
                    <Text style={styles.rank}>Rank #{element.trust_score_rank}</Text>
                </View>
                <IconButton onPress={() => Linking.openURL(element.url)}>
                    <LinkIcon width={22} height={22} fill={EColors.GREY} />
                </IconButton>
            </View>

            <View style={styles.cardBody}>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Trust Score:</Text>
                    <View style={[styles.scoreBadge, {
                        backgroundColor: element.trust_score === 10 ? '#2ecc71' :
                            element.trust_score >= 8 ? '#f1c40f' : '#e74c3c'
                    }]}>
                        <Text style={styles.scoreText}>{element.trust_score}/10</Text>
                    </View>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>24h Volume (BTC):</Text>
                    <Text style={styles.value}><Text style={{ color: EColors.BLACK }}>₿</Text> {Math.round(element.trade_volume_24h_btc).toLocaleString()}</Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Established:</Text>
                    <Text style={styles.value}>
                        {element.year_established || 'N/A'} {element.country ? `in ${element.country}` : ''}
                    </Text>
                </View>

                <Text style={styles.description} numberOfLines={3}>
                    {element.description || 'No description available'}
                </Text>
            </View>
        </View>
    );
}

export default ExchangeListItem

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: moderateScale(12),
        padding: moderateScale(15),
        borderWidth: moderateScale(2),
        borderColor: EColors.BORDER_COLOR
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: moderateScale(15),
    },
    logo: {
        width: moderateScale(40),
        height: moderateScale(40),
        borderRadius: moderateScale(20),
        marginRight: moderateScale(12)
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
        marginTop: moderateScale(2)
    },
    cardBody: {
        gap: moderateScale(8)
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontSize: EFontSize.SM,
        fontFamily: EFonts.MEDIUM,
        color: EColors.GREY
    },
    value: {
        fontSize: EFontSize.SM,
        fontFamily: EFonts.MEDIUM,
        color: EColors.DARK_GREY
    },
    scoreBadge: {
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(4),
        borderRadius: moderateScale(12),
    },
    scoreText: {
        fontSize: moderateScale(12),
        fontFamily: EFonts.MEDIUM,
        color: EColors.WHITE
    },
    description: {
        fontSize: EFontSize.XS,
        fontFamily: EFonts.MEDIUM,
        color: EColors.DARK_GREY,
        lineHeight: moderateScale(18),
        marginTop: moderateScale(5)
    },
});