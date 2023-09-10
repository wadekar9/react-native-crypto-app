import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react';
import { Fonts, Colors, moderateScale } from '@utils/theme';
import { InvestmentBannerIcon } from '@assets/icons';
import BannerButton from '@components/BannerButton';

const InvestmentBanner : React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={{flex : 1, alignItems : 'flex-start', justifyContent : 'space-evenly'}}>
        <Text style={styles.labelStyle}>Welcome Nayan,</Text>
        <Text style={styles.sloganStyle}>Make your first investment today</Text>
      </View>
      <View style={styles.bottomContainer}>
        <BannerButton label='Invest Now' labelColor={Colors.PRIMARY_COLOR} onPress={() => console.log('jjjj')} externalStyle={{ alignSelf : 'center' }} />
        <InvestmentBannerIcon />
      </View>
    </View>
  )
}

export default memo(InvestmentBanner);

const styles = StyleSheet.create({
  container : {
    backgroundColor : Colors.PRIMARY_COLOR,
    width : '100%',
    height : moderateScale(141),
    overflow : 'hidden',
    borderRadius : moderateScale(12),
    paddingHorizontal : moderateScale(18),
    paddingVertical : moderateScale(10)
  },
  sloganStyle : {
    fontFamily : Fonts.GOTHAM_MEDIUM,
    fontSize : moderateScale(16.5),
    color : Colors.WHITE,
    textTransform : 'capitalize'
  },
  labelStyle : {
    fontFamily : Fonts.GOTHAM_MEDIUM,
    fontSize : moderateScale(15),
    color : Colors.WHITE,
    textTransform : 'capitalize'
  },
  bottomContainer : {
    flex : 1,
    flexDirection : 'row',
    alignItems : 'stretch',
    justifyContent : 'space-between'
  }
})