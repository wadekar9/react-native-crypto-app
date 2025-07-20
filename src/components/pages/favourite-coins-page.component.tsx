import { View, StyleSheet } from 'react-native';
import React, { memo } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { DEVICE_WIDTH, moderateScale } from '$constants/styles.constants';
import { MarketCoinListItem } from '$components/layouts';
import { useFavouriteCoins } from '$hooks/modules';

const FavouritesCoinsPage = () => {
  const { loading, coins } = useFavouriteCoins();

  return (
    <View style={styles.contaienr}>
      <FlatList
        data={coins}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        scrollEventThrottle={16}
        initialNumToRender={10}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item, index }) => (<MarketCoinListItem key={`${index}`} element={item} />)}
      />
    </View>
  );
};

export default memo(FavouritesCoinsPage);

const styles = StyleSheet.create({
  contaienr: {
    flex: 1,
    flexGrow: 1,
    height: '100%',
    width: DEVICE_WIDTH
  },
  contentContainer: {
    flexGrow: 1,
    gap: moderateScale(8),
    padding: moderateScale(20)
  }
})