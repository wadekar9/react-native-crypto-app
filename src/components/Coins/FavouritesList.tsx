import { View, FlatList, StyleSheet } from 'react-native';
import React, { memo } from 'react';
import BaseCoinListItem from '$components/BaseCoinListItem';
import { DEVICE_STYLES, moderateScale } from '$utils/theme';

const FavouritesList = () => {
  return (
    <View style={styles.contaienr}>
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
  );
};

export default memo(FavouritesList);

const styles = StyleSheet.create({
  contaienr: {
    height: '100%',
    width: DEVICE_STYLES.SCREEN_WIDTH
  }
})