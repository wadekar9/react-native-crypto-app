import {Image, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {Colors, Fonts, moderateScale} from '@utils/theme';
import {BITCOIN_COIN} from '@assets/images/crypto';
import {LineChart, Grid} from 'react-native-svg-charts';
import {displayAmountWithUnit} from '@services/index';

interface TransactionListItemProps {
  item: undefined;
  index: number;
}

const TransactionListItem: React.FC<TransactionListItemProps> = ({
  item,
  index,
}: TransactionListItemProps) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.18,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
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
      <View style={{flex: 0.82, flexDirection: 'row', alignItems: 'stretch',paddingVertical : moderateScale(8)}}>
        <View style={{flex: 1}}>
            <View style={{flex : 0.45,justifyContent:'center'}}>
                <Text style={styles.titleStyle}>Bitcoin / BTC</Text>
            </View>
            <View style={{flex : 0.55,justifyContent:'space-evenly',alignItems: 'flex-start'}}>
                <Text style={styles.labelStyle}>Amount: 5.445 BTC</Text>
                <Text style={styles.labelStyle}>Price: $ 53.85</Text>
            </View>
        </View>
        <View style={{flex: 1}}>
            <View style={{flex : 0.45,justifyContent:'center',alignItems: 'flex-end',right : moderateScale(13)}}>
                <Text style={styles.titleStyle}>Total: $122.32</Text>
            </View>
            <View style={{flex : 0.55,justifyContent:'space-evenly',alignItems: 'flex-end',right : moderateScale(13)}}>
                <Text style={styles.labelStyle}>27 May, 09:28 AM</Text>
                <Text style={[styles.labelStyle,{ color : Colors.GREEN }]}>Successfully completed</Text>
            </View>
        </View>
      </View>
    </View>
  );
};

export default memo(TransactionListItem);

const styles = StyleSheet.create({
  container: {
    height: moderateScale(90),
    borderRadius: moderateScale(8),
    backgroundColor: Colors.WHITE,
    elevation: 2,
    shadowColor: Colors.PRIMARY_BLACK_COLOR,
    flexDirection: 'row',
    alignItems: 'stretch',
    overflow: 'hidden',
  },
  titleStyle : {
    fontFamily : Fonts.CIRCULAR_STD_BOOK,
    fontSize : moderateScale(18.5),
    color : Colors.DARK_GREY,
  },
  labelStyle : {
    fontFamily : Fonts.CIRCULAR_STD_BOOK,
    fontSize : moderateScale(13),
    color : Colors.GREY
  }
});
