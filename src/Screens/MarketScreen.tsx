import {StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import React, { useCallback, useState } from 'react';
import {DropIcon, SearchIcon} from '@assets/icons';
import {BottomTabsScreenProps} from '@utils/navigation';
import BaseLayout from '@components/BaseLayout';
import { LooserList, AllCoinsList, FavouritesList, GainerList } from '@components/Coins';
import {Colors, Fonts, moderateScale} from '@utils/theme';
import MarketSelector from '@components/MarketSelector';

const Tabs = ['All', 'Gainer', 'Looser', 'Favourites'];

const MarketScreen: React.FC<BottomTabsScreenProps<'MarketScreen'>> = () => {

  const [sheetStatus, setSheetStatus] = useState<boolean>(false);

  const toggleSheetStatus = useCallback((e : boolean) => setSheetStatus(e),[sheetStatus]);

  return (
    <BaseLayout>
      <View style={{flex: 0.2}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flex: 0.8,
              paddingLeft: moderateScale(15),
              justifyContent: 'center',
            }}>
            <Text
              style={{
                marginVertical: moderateScale(2),
                fontFamily: Fonts.CIRCULAR_STD_MEDIUM,
                fontSize: moderateScale(20),
                color: Colors.PRIMARY_BLACK_COLOR,
              }}>
              Market is down&nbsp;
              <Text style={{color: Colors.RED}}>11.23%</Text>
            </Text>
            <Text
              style={{
                marginVertical: moderateScale(2),
                fontFamily: Fonts.CIRCULAR_STD_MEDIUM,
                fontSize: moderateScale(12),
                color: Colors.GREY,
              }}>
              In the past 24 hours
            </Text>
          </View>
          <View
            style={{flex: 0.2, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
              accessibilityRole={'button'}
              accessible={true}
              activeOpacity={0.8}
              onPress={() => console.log('jjjjj')}>
              <SearchIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.labelStyle}>Coins</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            accessibilityRole={'button'}
            accessible={true}
            onPress={() => setSheetStatus(true)}
            style={styles.dropContainer}>
            <Text style={styles.selectedMarketStyle}>Market-INR</Text>
            <DropIcon />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 0.8}}>
        <View style={styles.tabContainer}>
          {Tabs.map((element, index) => {
            return (
              <TouchableOpacity
                accessibilityRole={'tab'}
                accessible={true}
                activeOpacity={0.8}
                key={`${index}`}
                style={{justifyContent: 'center'}}
                onPress={() => console.log('kkkk')}>
                <Text style={styles.tabText}>{element}</Text>
                <View style={styles.tabLineContainer} />
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{flex: 1}}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{flexGrow : 1}}
            showsHorizontalScrollIndicator={false}
            alwaysBounceHorizontal={false}
            pagingEnabled={true}
            snapToAlignment={'center'}
            accessibilityRole={'list'}
            decelerationRate={'fast'}
            centerContent={true}
            pinchGestureEnabled={false}
            scrollEventThrottle={16}
          >
            <LooserList />
            <AllCoinsList />
            <FavouritesList />
            <GainerList />
          </ScrollView>
        </View>
      </View>

      <MarketSelector
        key={'market-selector-sheet'}
        changeStatus={toggleSheetStatus}
        status={sheetStatus}
      />
    </BaseLayout>
  );
};

export default MarketScreen;

const styles = StyleSheet.create({
  middleContainer: {
    flex: 1,
    paddingHorizontal: moderateScale(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(5),
    borderWidth: 1,
    borderColor: Colors.BORDER_COLOR,
    borderRadius: moderateScale(30),
  },
  selectedMarketStyle: {
    fontFamily: Fonts.CIRCULAR_STD_MEDIUM,
    fontSize: moderateScale(12),
    color: Colors.GREY,
    marginRight: moderateScale(8),
  },
  labelStyle: {
    fontFamily: Fonts.CIRCULAR_STD_MEDIUM,
    fontSize: moderateScale(18),
    color: Colors.BLACK,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    height: moderateScale(38),
    paddingHorizontal: moderateScale(5),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.DARK_GREY,
  },
  tabText: {
    fontFamily: Fonts.CIRCULAR_STD_MEDIUM,
    fontSize: moderateScale(14),
    color: Colors.GREY,
    marginHorizontal: moderateScale(10),
  },
  tabLineContainer: {
    backgroundColor: Colors.PRIMARY_COLOR,
    height: StyleSheet.hairlineWidth + 1.8,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});
