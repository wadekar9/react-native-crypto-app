import { Text, View, ScrollView, Animated } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import { SearchIcon } from '$assets/icons';
import { BottomTabsScreenProps, navigationRef } from '$types/navigation';
import { BaseLayout, IconButton } from '$components/common';
import { TopLoosersCoinsPage, AllCoinsPage, FavouritesCoinsPage, TopGainersCoinsPage } from '$components/pages';
import { DEVICE_WIDTH, EColors, EFonts, moderateScale } from '$constants/styles.constants';
import { styles } from './styles';
import { EBottomTabScreens, EStackScreens } from '$constants/screens.constants';

const tabs = ['All', 'Gainer', 'Loser', 'Favourites'];

const Market: React.FC<BottomTabsScreenProps<EBottomTabScreens.MARKET>> = () => {


  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const translateX = useRef(new Animated.Value(10)).current;
  const tabWidths = useRef<number[]>(Array(tabs.length).fill(0)).current;
  const tabPositions = useRef<number[]>(Array(tabs.length).fill(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);

  const handleTabLayout = useCallback(
    (index: number, event: any) => {
      const { width, x } = event.nativeEvent.layout;
      tabWidths[index] = width;
      tabPositions[index] = x;
    },
    []
  );

  const animateIndicator = useCallback(
    (index: number) => {
      Animated.spring(translateX, {
        toValue: tabPositions[index],
        useNativeDriver: true,
        speed: 12,
        bounciness: 0,
      }).start();
    },
    [translateX]
  );

  const handleTabPress = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      animateIndicator(index);
      scrollViewRef.current?.scrollTo({
        x: index * DEVICE_WIDTH,
        animated: true,
      });
    },
    [animateIndicator]
  );

  const handleScrollEnd = useCallback(
    (event: any) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const newIndex = Math.round(offsetX / DEVICE_WIDTH);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
        animateIndicator(newIndex);
      }
    },
    [currentIndex, animateIndicator]
  );

  return (
    <BaseLayout>
      <>
        <View style={styles.headerWrapper}>
          <View style={styles.header}>
            <View style={{ flexGrow: 1, justifyContent: 'center' }}>
              <Text style={styles.headerTitle}>Market is down <Text style={{ color: EColors.RED }}>11.23%</Text></Text>
              <Text style={styles.headerSpan}>In the past 24 hours</Text>
            </View>
            <IconButton style={styles.icon} onPress={() => navigationRef.current?.navigate(EStackScreens.SEARCH)}>
              <SearchIcon />
            </IconButton>
          </View>
          <View style={styles.metrics}>
            <View style={styles.metric}>
              <Text style={styles.metricText}>Coins: <Text style={styles.metricValue}>17,688</Text></Text>
            </View>
            <View style={styles.metric}>
              <Text style={styles.metricText}>Exchanges: <Text style={styles.metricValue}>17,688</Text></Text>
            </View>
            <View style={styles.metric}>
              <Text style={styles.metricText}>Dominance: <Text style={styles.metricValue}>17,688</Text></Text>
            </View>
          </View>
        </View>
        <View style={styles.tabs}>
          {tabs.map((tab, idx) => (
            <IconButton onPress={() => handleTabPress(idx)} onLayout={(e) => handleTabLayout(idx, e)} key={`${idx}`} style={styles.tab}>
              <Text numberOfLines={1} style={[styles.tabText, currentIndex === idx && { color: EColors.PRIMARY_COLOR }]}>{tab}</Text>
            </IconButton>
          ))}
          <Animated.View style={[styles.tabIndicator, { transform: [{ translateX }], width: tabWidths[currentIndex] || moderateScale(38) }]} />
        </View>
        <View style={styles.container}>
          <ScrollView
            ref={scrollViewRef}
            horizontal={true}
            contentContainerStyle={{ flexGrow: 1 }}
            showsHorizontalScrollIndicator={false}
            alwaysBounceHorizontal={false}
            pagingEnabled={true}
            snapToAlignment={'center'}
            snapToInterval={DEVICE_WIDTH}
            accessibilityRole={'list'}
            decelerationRate={'fast'}
            centerContent={true}
            pinchGestureEnabled={false}
            scrollEventThrottle={16}
            onMomentumScrollEnd={handleScrollEnd}
          >
            <AllCoinsPage />
            <TopGainersCoinsPage />
            <TopLoosersCoinsPage />
            <FavouritesCoinsPage />
          </ScrollView>
        </View>
      </>
    </BaseLayout>
  );
};

export default Market;