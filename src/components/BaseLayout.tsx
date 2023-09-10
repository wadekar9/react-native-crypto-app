import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native';
import React, {memo} from 'react';
import {Colors} from '@utils/theme';

const BaseLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container]}>{children}</View>
    </SafeAreaView>
  );
};

export default memo(BaseLayout);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_COLOR,
  },
});
