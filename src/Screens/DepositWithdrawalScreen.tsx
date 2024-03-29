import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {RootStackScreenProps} from '@utils/navigation';
import BaseLayout from '@components/BaseLayout';
import {Colors, Fonts, moderateScale} from '@utils/theme';
import {LeftChevron, BackSpaceIcon} from '@assets/icons';
import {customKeyboardKeys} from '@mock/index';
import BaseButton from '@components/BaseButton';
import {displayAmountWithUnit} from '@services/index';

const percentageArr = ['0%', '10%', '25%', '50%', '75%', '100%'];

const DepositWithdrawalScreen: React.FC<RootStackScreenProps<'DepositWithdrawalScreen'>> = ({route, navigation}) => {
  const {requestType} = route.params;

  const PercentageItem = ({item}: {item: string}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        accessibilityRole={'button'}
        accessible={true}
        style={styles.percentageItemStyle}>
        <Text style={styles.percentageItemLabelStyle}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <BaseLayout>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={{
            flex: 0.1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          accessibilityRole={'button'}
          accessible={true}
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <LeftChevron />
        </TouchableOpacity>
        <View style={{flex: 0.9, justifyContent: 'center'}}>
          <Text style={styles.headerName}>{requestType} INR</Text>
        </View>
      </View>
      <View style={{flex: 1, padding: moderateScale(13)}}>
        <View style={{flex: 0.48}}>
          <View
            style={{
              flex: 0.65,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text style={styles.labelStyle}>Enter amount in INR</Text>
            <Text style={styles.amountStyle}>$0</Text>
            <Text style={styles.labelStyle}>
              Min {displayAmountWithUnit(100)} - Max {displayAmountWithUnit(1000000)}
            </Text>
          </View>
          <View
            style={{
              flex: 0.35,
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <Text style={styles.currentBalanceLabelStyle}>
              Current Balance: {displayAmountWithUnit(10000)}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                overflow : 'scroll',
                width: '100%',
              }}>
              {percentageArr.map((ele, index) => (
                <PercentageItem key={`${index}`} item={ele} />
              ))}
            </View>
          </View>
        </View>
        <View
          style={{flex: 0.52, justifyContent: 'space-around', zIndex: 2000}}>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {customKeyboardKeys?.map((element, index) => {
              return (
                <TouchableHighlight
                  style={[styles.keyboardBtnContainer, element.externalStyle]}
                  underlayColor={Colors.LIGHT_SKY}
                  accessibilityRole={'button'}
                  accessible={false}
                  onPress={() => console.log('jjjjj')}
                  key={`${index}`}>
                  {element.isIcon ? (
                    <BackSpaceIcon />
                  ) : (
                    <Text style={styles.btnLabelStyle}>{element.label}</Text>
                  )}
                </TouchableHighlight>
              );
            })}
          </View>

          <BaseButton
            label={`${requestType} INR`}
            labelStyle={{textTransform: 'uppercase'}}
          />
        </View>
      </View>
    </BaseLayout>
  );
};

export default DepositWithdrawalScreen;

const styles = StyleSheet.create({
  headerName: {
    fontFamily: Fonts.CIRCULAR_STD_BOOK,
    fontSize: moderateScale(16),
    color: Colors.PRIMARY_BLACK_COLOR,
  },
  headerContainer: {
    flex: 0.08,
    flexDirection: 'row',
    alignItems: 'stretch',
    zIndex: 2000,
    elevation: 2,
    shadowColor: Colors.PRIMARY_BLACK_COLOR,
    backgroundColor: Colors.BACKGROUND_COLOR,
  },
  keyboardBtnContainer: {
    backgroundColor: Colors.TRANSPARENT,
    width: '33.3%',
    height: moderateScale(55),
  },
  btnLabelStyle: {
    fontFamily: Fonts.CIRCULAR_STD_BOLD,
    fontSize: moderateScale(28),
    color: Colors.PRIMARY_BLACK_COLOR,
  },
  labelStyle: {
    fontFamily: Fonts.CIRCULAR_STD_MEDIUM,
    fontSize: moderateScale(12),
    color: Colors.GREY,
  },
  amountStyle: {
    fontFamily: Fonts.CIRCULAR_STD_BOOK,
    fontSize: moderateScale(48),
    color: Colors.PRIMARY_BLACK_COLOR,
  },
  currentBalanceLabelStyle: {
    fontFamily: Fonts.CIRCULAR_STD_MEDIUM,
    fontSize: moderateScale(14),
    color: Colors.DARK_GREY,
  },
  percentageItemStyle: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
    borderRadius: moderateScale(20),
    borderColor: Colors.GREY,
    borderWidth: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentageItemLabelStyle: {
    fontFamily: Fonts.CIRCULAR_STD_MEDIUM,
    fontSize: moderateScale(12),
    color: Colors.GREY,
    textAlign: 'center',
  },
});
