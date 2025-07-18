import { View, FlatList, StyleSheet } from 'react-native';
import React, { memo } from 'react';
import BaseCoinListItem from '$components/layouts/base-coin-list-item.component';
import { DEVICE_WIDTH, moderateScale } from '$constants/styles.constants';


const TopLoosersCoinsPage = () => {
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

export default memo(TopLoosersCoinsPage);

const styles = StyleSheet.create({
  contaienr: {
    height: '100%',
    width: DEVICE_WIDTH
  }
})