import React, { memo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { EColors, EFonts, EFontSize, moderateScale } from '$constants/styles.constants';
import { ITrendingNFT } from '$types/api-types';

interface NFTListItemProps {
  element: ITrendingNFT;
}

const NFTListItem: React.FC<NFTListItemProps> = ({
  element
}) => {

  return (
    <View style={styles.container} accessibilityLabel={`View details for ${element.name}`}>
      <View style={styles.iconWrapper}>
        <Image
          source={{ uri: element.thumb }}
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
            <SvgUri
              width={moderateScale(80)}
              height={moderateScale(40)}
              uri={element.data.sparkline}
            />
          </View>

          <View style={styles.price}>
            <Text numberOfLines={1} style={styles.amountStyle}>{element?.data?.floor_price}</Text>
            <Text numberOfLines={1} style={styles.marketCap}>{element.data.h24_volume}</Text>
          </View>
        </View>
      </View>
    </View>
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
    textTransform: 'capitalize',
  },
  shortLabelStyle: {
    fontFamily: EFonts.MEDIUM,
    fontSize: EFontSize.XS,
    color: EColors.GREY,
    textAlign: 'left',
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

export default memo(NFTListItem);