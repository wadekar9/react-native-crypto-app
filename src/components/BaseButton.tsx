import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { memo } from 'react';
import {BaseButtonProps} from '@types';
import {Colors, Fonts, moderateScale} from '@utils/theme';

const BaseButton: React.FC<BaseButtonProps> = ({
  label,
  containerStyle,
  labelStyle,
  onPress,
}: BaseButtonProps) => {
  return (
    <TouchableOpacity
      accessibilityRole={'tab'}
      accessible={true}
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default memo(BaseButton);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: moderateScale(48),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.PRIMARY_COLOR,
    borderRadius: moderateScale(4),
    overflow: 'hidden'
  },
  label: {
    fontFamily: Fonts.CIRCULAR_STD_MEDIUM,
    fontSize: moderateScale(15),
    color: Colors.BACKGROUND_COLOR,
    textAlign : 'center'
  },
});
