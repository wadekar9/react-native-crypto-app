import { View, StyleSheet, FlatList } from 'react-native';
import React, { memo } from 'react';
import { DEVICE_WIDTH, moderateScale } from '$constants/styles.constants';
import { useFavouriteCoins } from '$hooks/modules';
import EmptyListCoinsPage from './empty-list-coins-page.component';
import { CommonListItemSkeleton } from '$components/skeleton';
import { FavouriteCoinListItem } from '$components/layouts';

const FavouritesCoinsPage = () => {
  const { loading, coins, fetchFavouriteCoins } = useFavouriteCoins();

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.contentContainer}>
          {Array.from({ length: 10 }).map((_, idx) => <CommonListItemSkeleton key={`${idx}`} />)}
        </View>
      )}
      {!loading && (
        <FlatList
          data={coins}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          scrollEventThrottle={16}
          initialNumToRender={10}
          onRefresh={fetchFavouriteCoins}
          refreshing={loading}
          contentContainerStyle={styles.contentContainer}
          renderItem={({ item, index }) => (<FavouriteCoinListItem element={item} key={`${index}`} />)}
          ListEmptyComponent={<EmptyListCoinsPage />}
        />
      )}
    </View>
  );
};

export default memo(FavouritesCoinsPage);

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