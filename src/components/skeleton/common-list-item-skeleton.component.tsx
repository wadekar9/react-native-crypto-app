import React from 'react';
import { View, StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const CommonListItemSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={10}>
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.icon} />
          <View style={styles.textGroup}>
            <View style={styles.title} />
            <View style={styles.subtitle} />
          </View>
          <View style={styles.chart} />
          <View style={styles.bottomRow}>
            <View style={styles.price} />
            <View style={styles.percentage} />
          </View>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 8
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textGroup: {
    marginLeft: 12
  },
  title: {
    width: 80,
    height: 12,
    borderRadius: 4
  },
  subtitle: {
    width: 40,
    height: 10,
    marginTop: 6,
    borderRadius: 4
  },
  chart: {
    width: 80,
    height: 40,
    margin: 'auto',
    borderRadius: 6
  },
  bottomRow: {
    gap: 5,
    alignItems: "flex-end"
  },
  price: {
    width: 80,
    height: 12,
    borderRadius: 4
  },
  percentage: {
    width: 40,
    height: 10,
    borderRadius: 4
  }
});

export default CommonListItemSkeleton;