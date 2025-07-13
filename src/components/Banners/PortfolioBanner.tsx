import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react';
import { EFonts, EColors, moderateScale } from '$constants/styles.constants';
import { displayAmountWithUnit } from '$utils/helpers';

const PortfolioBanner = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.2 }}>
        <Text style={styles.headerLabelStyle}>Portfolio</Text>
      </View>
      <View style={{ flex: 0.8 }}>
        <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
          <Text style={styles.labelStyle}>Holding value</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.textStyle}>{displayAmountWithUnit(2897)}</Text>
            <Text style={[styles.textStyle, { marginLeft: moderateScale(12), fontSize: moderateScale(12), color: EColors.LIGHT_SKY }]}>+9.22%</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'stretch' }}>
          <View style={{ flex: 0.5, justifyContent: 'space-evenly' }}>
            <Text style={styles.labelStyle}>Invested Value</Text>
            <Text style={[styles.textStyle, { fontSize: moderateScale(20) }]}>{displayAmountWithUnit(2897)}</Text>
          </View>
          <View style={styles.verticalLineStyle} />
          <View style={{ flex: 0.89, justifyContent: 'space-evenly', paddingLeft: moderateScale(12) }}>
            <Text style={[styles.labelStyle, { textTransform: 'none' }]}>Available INR</Text>
            <Text style={[styles.textStyle, { fontSize: moderateScale(20) }]}>{displayAmountWithUnit(2897)}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default memo(PortfolioBanner);

const styles = StyleSheet.create({
  container: {
    backgroundColor: EColors.PRIMARY_COLOR,
    width: '100%',
    height: moderateScale(200),
    overflow: 'hidden',
    borderRadius: moderateScale(12),
    padding: moderateScale(18)
  },
  labelStyle: {
    fontFamily: EFonts.MEDIUM,
    fontSize: moderateScale(11),
    color: EColors.WHITE,
    textTransform: 'capitalize'
  },
  headerLabelStyle: {
    fontFamily: EFonts.BOLD,
    fontSize: moderateScale(20),
    color: EColors.WHITE,
    textTransform: 'capitalize'
  },
  textStyle: {
    fontFamily: EFonts.BOLD,
    fontSize: moderateScale(28),
    color: EColors.WHITE
  },
  verticalLineStyle: {
    width: StyleSheet.hairlineWidth + 0,
    height: '85%',
    alignSelf: 'center',
    backgroundColor: 'rgba(248, 249, 250, 0.50)',
    flex: 0.005
  }
})