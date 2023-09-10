import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react';
import { Fonts, Colors, moderateScale } from '@utils/theme';
import { CouponsBannerIcon } from '@assets/icons';
import BannerButton from '@components/BannerButton';

const CouponsBanner : React.FC = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'space-evenly',
        }}>
        <Text style={styles.labelStyle}>Rewards</Text>
        <Text style={styles.sloganStyle}>
        Like, Share & get free coupons
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <BannerButton
          label="Share Now"
          labelColor={Colors.VIOLET}
          onPress={() => console.log('jjjj')}
          externalStyle={{alignSelf: 'center'}}
        />
      </View>
      <View style={{position: 'absolute', right: 20, bottom: 20}}>
        <CouponsBannerIcon />
      </View>
    </View>
  );
}

export default memo(CouponsBanner);

const styles = StyleSheet.create({
  container : {
    backgroundColor : Colors.VIOLET,
    width : '100%',
    height : moderateScale(141),
    overflow : 'hidden',
    borderRadius : moderateScale(12),
    paddingHorizontal : moderateScale(18),
    paddingVertical : moderateScale(10),
    marginVertical : moderateScale(5)
  },
  sloganStyle : {
    fontFamily : Fonts.CIRCULAR_STD_MEDIUM,
    fontSize : moderateScale(15.5),
    color : Colors.WHITE,
    textTransform : 'capitalize',
    width : '80%'
  },
  labelStyle : {
    fontFamily : Fonts.CIRCULAR_STD_MEDIUM,
    fontSize : moderateScale(12),
    color : Colors.WHITE,
    textTransform : 'capitalize'
  },
  bottomContainer : {
    flex : 1,
    flexDirection : 'row',
    alignItems : 'stretch',
    justifyContent : 'space-between'
  }
});