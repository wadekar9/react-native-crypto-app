import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React, { useCallback, useState } from 'react';
import { DropIcon, SearchIcon } from '$assets/icons';
import { BottomTabsScreenProps } from '$types/navigation';
import { BaseLayout } from '$components/common';
import { TopLoosersCoinsPage, AllCoinsPage, FavouritesCoinsPage, TopGainersCoinsPage } from '$components/pages';
import { EColors, EFonts, moderateScale } from '$constants/styles.constants';
import { styles } from './styles';
import { EBottomTabScreens } from '$constants/screens.contants';

const Tabs = ['All', 'Gainer', 'Looser', 'Favourites'];

const Market: React.FC<BottomTabsScreenProps<EBottomTabScreens.MARKET>> = () => {


  return (
    <BaseLayout>
      <View style={{ flex: 0.2 }}>
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
                fontFamily: EFonts.MEDIUM,
                fontSize: moderateScale(20),
                color: EColors.PRIMARY_BLACK_COLOR,
              }}>
              Market is down&nbsp;
              <Text style={{ color: EColors.RED }}>11.23%</Text>
            </Text>
            <Text
              style={{
                marginVertical: moderateScale(2),
                fontFamily: EFonts.MEDIUM,
                fontSize: moderateScale(12),
                color: EColors.GREY,
              }}>
              In the past 24 hours
            </Text>
          </View>
          <View
            style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity
              accessibilityRole={'button'}
              accessible={true}
              activeOpacity={0.8}
              onPress={() => console.log('jjjjj')}>
              <SearchIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flex: 0.8 }}>
        <View style={styles.tabContainer}>
          {Tabs.map((element, index) => {
            return (
              <TouchableOpacity
                accessibilityRole={'tab'}
                accessible={true}
                activeOpacity={0.8}
                key={`${index}`}
                style={{ justifyContent: 'center' }}
                onPress={() => console.log('kkkk')}>
                <Text style={styles.tabText}>{element}</Text>
                <View style={styles.tabLineContainer} />
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{ flexGrow: 1 }}
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
            <TopLoosersCoinsPage />
            <AllCoinsPage />
            <FavouritesCoinsPage />
            <TopGainersCoinsPage />
          </ScrollView>
        </View>
      </View>
    </BaseLayout>
  );
};

export default Market;