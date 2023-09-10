import {Image, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {Colors, Fonts, moderateScale} from '@utils/theme';
import {BITCOIN_COIN} from '@assets/images/crypto';
import {LineChart, Grid} from 'react-native-svg-charts';
import { displayAmountWithUnit } from '@services/index';

interface BaseCoinListItemProps {
  index: number;
  item: undefined;
}

const data: number[] = [
  50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80,
];

const BaseCoinListItem: React.FC<BaseCoinListItemProps> = ({
  index,
  item,
}: BaseCoinListItemProps) => {
  return (
    <View style={styles.container}>
      <View
        style={{flex: 0.18, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={{
            uri: BITCOIN_COIN.uri,
          }}
          style={{
            width: moderateScale(40),
            height: moderateScale(40),
            aspectRatio: 1,
          }}
          resizeMode={'cover'}
        />
      </View>
      <View style={{flex: 0.82, flexDirection: 'row'}}>
        <View style={{flex: 0.35, justifyContent: 'space-evenly'}}>
          <Text style={styles.labelStyle}>Bitcoin</Text>
          <Text style={styles.shortLabelStyle}>BTC</Text>
        </View>
        <View
          style={{flex: 0.3, alignItems: 'stretch', justifyContent: 'center'}}>
          <LineChart
            style={{height: moderateScale(60), width: moderateScale(70)}}
            data={data}
            svg={{stroke: 'green'}}
            contentInset={{top: moderateScale(20), bottom: moderateScale(20)}}>
            <Grid />
          </LineChart>
        </View>
        <View style={{flex: 0.35,alignItems : 'flex-end',justifyContent : 'space-evenly'}}>
          <Text style={styles.amountStyle}>{displayAmountWithUnit(5000)}</Text>
          <Text style={styles.percentageStyle}>21.33%</Text>
        </View>
      </View>
    </View>
  );
};

export default memo(BaseCoinListItem);

const styles = StyleSheet.create({
  container: {
    height: moderateScale(72),
    borderRadius: moderateScale(6),
    backgroundColor: Colors.WHITE,
    elevation: 2,
    shadowColor: Colors.PRIMARY_BLACK_COLOR,
    marginHorizontal: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'stretch',
    overflow: 'hidden',
  },
  shortLabelStyle: {
    fontFamily: Fonts.CIRCULAR_STD_BOOK,
    fontSize: moderateScale(14),
    color: Colors.GREY,
    textAlign: 'left',
    textTransform: 'uppercase',
  },
  labelStyle: {
    fontFamily: Fonts.CIRCULAR_STD_BOOK,
    fontSize: moderateScale(16),
    color: Colors.PRIMARY_BLACK_COLOR,
    textAlign: 'left',
    textTransform: 'capitalize',
  },
  percentageStyle : {
    fontFamily: Fonts.CIRCULAR_STD_MEDIUM,
    fontSize: moderateScale(13),
    color: Colors.RED,
    textAlign: 'left',
    right : moderateScale(12)
  },
  amountStyle : {
    fontFamily: Fonts.CIRCULAR_STD_BOOK,
    fontSize: moderateScale(16),
    color: Colors.DARK_GREY,
    textAlign: 'right',
    textTransform: 'capitalize',
    right : moderateScale(12)
  }
});
