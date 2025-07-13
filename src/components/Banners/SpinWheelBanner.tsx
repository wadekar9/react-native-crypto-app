import { StyleSheet, Text, View } from 'react-native';
import React, { memo } from 'react';
import { EFonts, EColors, moderateScale } from '$constants/styles.constants';
import { SpeenWheelBannerIcon } from '$assets/icons';
import BannerButton from '$components/BannerButton';

const SpinWheelBanner = () => {
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
          Spin Wheel & Win Free Tokens!
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <BannerButton
          label="Get Tokens"
          labelColor={EColors.PINK}
          onPress={() => console.log('jjjj')}
          externalStyle={{ alignSelf: 'center' }}
        />
      </View>
      <View style={{ position: 'absolute', right: 20, bottom: 20 }}>
        <SpeenWheelBannerIcon />
      </View>
    </View>
  );
}

export default memo(SpinWheelBanner);

const styles = StyleSheet.create({
  container: {
    backgroundColor: EColors.PINK,
    width: '100%',
    height: moderateScale(141),
    overflow: 'hidden',
    borderRadius: moderateScale(12),
    paddingHorizontal: moderateScale(18),
    paddingVertical: moderateScale(10),
    marginVertical: moderateScale(5),
  },
  sloganStyle: {
    fontFamily: EFonts.MEDIUM,
    fontSize: moderateScale(15.5),
    color: EColors.WHITE,
    textTransform: 'capitalize',
    width: '80%',
  },
  labelStyle: {
    fontFamily: EFonts.MEDIUM,
    fontSize: moderateScale(12),
    color: EColors.WHITE,
    textTransform: 'capitalize',
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
});
