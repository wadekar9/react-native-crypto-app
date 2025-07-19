import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import React, { memo } from 'react';
import { EColors, EFonts, moderateScale } from '$constants/styles.constants';

interface BaseButtonProps {
  label: string;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

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
    backgroundColor: EColors.PRIMARY_COLOR,
    borderRadius: moderateScale(4),
    overflow: 'hidden'
  },
  label: {
    fontFamily: EFonts.MEDIUM,
    fontSize: moderateScale(15),
    color: EColors.BACKGROUND_COLOR,
    textAlign: 'center'
  },
});
