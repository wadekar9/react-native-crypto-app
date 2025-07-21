import { View, StyleSheet } from 'react-native';
import React, { memo } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { DEVICE_WIDTH, moderateScale } from '$constants/styles.constants';
import { MarketCoinListItem } from '$components/layouts';
import { useLowVolumeCoins } from '$hooks/modules';
import EmptyListCoinsPage from './empty-list-coins-page.component';
import { CommonListItemSkeleton } from '$components/skeleton';

const TopLoosersCoinsPage = () => {
  const { loading, coins, handlePagination, handleRefresh } = useLowVolumeCoins();

  return (
    <View style={styles.container}>
      {(loading && coins.length == 0) && (
        <View style={styles.contentContainer}>
          {Array.from({ length: 10 }).map((_, idx) => <CommonListItemSkeleton key={`${idx}`} />)}
        </View>
      )}
      {(coins.length != 0) && (
        <FlatList
          data={coins}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          scrollEventThrottle={16}
          initialNumToRender={10}
          contentContainerStyle={styles.contentContainer}
          renderItem={({ item, index }) => (<MarketCoinListItem key={`${index}`} element={item} />)}
          ListEmptyComponent={<EmptyListCoinsPage />}
          onEndReachedThreshold={0.1}
          onEndReached={handlePagination}
          onRefresh={handleRefresh}
          refreshing={false}
        />
      )}
    </View>
  );
};

export default memo(TopLoosersCoinsPage);

const styles = StyleSheet.create({
  container: {
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