import { StatusBar, StyleSheet, View } from 'react-native';
import React, { memo } from 'react';
import { EColors } from '$constants/styles.constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const { top, bottom } = useSafeAreaInsets();

  return (
    <>
      <StatusBar backgroundColor={EColors.PRIMARY_COLOR} barStyle={'light-content'} animated />
      <View style={[styles.container, { backgroundColor: EColors.PRIMARY_COLOR, paddingTop: top }]}>
        <View style={[styles.container, { paddingBottom: bottom }]}>
          <View style={styles.container}>
            {children}
          </View>
        </View>
      </View>
    </>
  );
};

export default memo(BaseLayout);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: EColors.BACKGROUND_COLOR,
  },
});
