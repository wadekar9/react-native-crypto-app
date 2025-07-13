import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BottomTabsScreenProps } from '$utils/navigation';
import BaseLayout from '$components/BaseLayout';
import { CouponsBanner, ReferBanner, SpinWheelBanner } from '$components/Banners';
import { Colors, Fonts, moderateScale } from '$utils/theme';
import { styles } from './styles';

interface KeyValuePairContainerProps {
  keyName: string;
  valueName: string;
  valueColor?: string;
}

const KeyValuePairContainer: React.FC<KeyValuePairContainerProps> = ({ keyName, valueName, valueColor }: KeyValuePairContainerProps) => {
  return (
    <View style={styles.keyValuePairContainer}>
      <View style={{ flex: 0.75 }}>
        <Text style={styles.keyValuePairContainerKey}>{keyName}</Text>
      </View>
      <View style={{ flex: 0.25, alignItems: 'flex-end' }}>
        <Text style={{ ...styles.keyValuePairContainerValue, color: valueColor || Colors.DARK_GREY }}>{valueName}</Text>
      </View>
    </View>
  )
}

const Reward: React.FC<BottomTabsScreenProps<'Reward'>> = () => {
  return (
    <BaseLayout>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, padding: moderateScale(10) }}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.container, { height: moderateScale(173) }]}>
          <View style={{ flex: 0.3, justifyContent: 'center', paddingLeft: moderateScale(15) }}>
            <Text style={styles.headerLabelStyle}>Coupons</Text>
          </View>
          <View style={{ flex: 0.7 }}>
            <KeyValuePairContainer key={'key-value-container'} keyName='No. of Coupons Won' valueName='06' />
            <KeyValuePairContainer key={'key-value-container1'} keyName='Tokens won from Spin so far' valueName='08' valueColor={Colors.PRIMARY_COLOR} />
            <KeyValuePairContainer key={'key-value-container2'} keyName='Remaining Coupons to Spin' valueName='01' valueColor={Colors.PRIMARY_COLOR} />
          </View>
        </View>
        <View style={[styles.container, { height: moderateScale(136) }]}>
          <View style={{ flex: 0.3, justifyContent: 'center', paddingLeft: moderateScale(15) }}>
            <Text style={styles.headerLabelStyle}>Referral</Text>
          </View>
          <View style={{ flex: 0.7 }}>
            <KeyValuePairContainer key={'key-value-container3'} keyName='Total No of referral' valueName='12' />
            <KeyValuePairContainer key={'key-value-container4'} keyName='Total No of Qualified referral' valueName='05' valueColor={Colors.PRIMARY_COLOR} />
          </View>
        </View>
        <ReferBanner />
        <CouponsBanner />
        <SpinWheelBanner />
      </ScrollView>
    </BaseLayout>
  );
};

export default Reward;