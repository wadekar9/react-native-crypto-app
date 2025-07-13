import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { BottomTabsScreenProps } from '$utils/navigation';
import BaseLayout from '$components/BaseLayout';
import { Colors, Fonts, moderateScale } from '$utils/theme';
import BaseCoinListItem from '$components/BaseCoinListItem';
import { PortfolioBanner } from '$components/Banners';
import { styles } from './styles';

const Portfolio: React.FC<BottomTabsScreenProps<'Portfolio'>> = ({ navigation }) => {

  return (
    <BaseLayout>
      <View style={{ margin: moderateScale(10), marginBottom: 0 }}>
        <PortfolioBanner />

        <View style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-around' }}>
          <TouchableOpacity
            activeOpacity={0.7}
            accessibilityRole={'button'}
            accessible={true}
            onPress={() => navigation.navigate('DepositWithdrawalScreen', { requestType: 'Deposit' })}
            style={[styles.buttonContainer, { backgroundColor: Colors.PRIMARY_COLOR }]}
          >
            <Text style={[styles.buttonContainerText, { color: Colors.WHITE }]}>Deposit INR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            accessibilityRole={'button'}
            accessible={true}
            onPress={() => navigation.navigate('DepositWithdrawalScreen', { requestType: 'Withdraw' })}
            style={[styles.buttonContainer, { backgroundColor: Colors.TRANSPARENT }]}
          >
            <Text style={[styles.buttonContainerText, { color: Colors.PRIMARY_COLOR }]}>Withdraw INR</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.labelStyle}>Yours Coins</Text>
        <View style={{ flex: 1 }}>
          <FlatList
            data={[...new Array(6)]}
            keyExtractor={(_, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            scrollEventThrottle={16}
            bouncesZoom={false}
            legacyImplementation={true}
            accessibilityRole={'list'}
            accessible={true}
            alwaysBounceVertical={false}
            maxToRenderPerBatch={10}
            ItemSeparatorComponent={() => (
              <View style={{ marginVertical: moderateScale(5) }} />
            )}
            contentContainerStyle={{
              flexGrow: 1,
              paddingVertical: moderateScale(8),
            }}
            renderItem={({ item, index }) => (
              <BaseCoinListItem key={`${index}`} item={item} index={index} />
            )}
          />
        </View>
      </View>
    </BaseLayout>
  );
};

export default Portfolio;