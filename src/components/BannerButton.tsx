import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { memo } from 'react';
import { Colors, Fonts, moderateScale } from '@utils/theme';

interface BannerButtonProps {
    label : string;
    labelColor? : string;
    onPress? : () => void;
    externalStyle? : StyleProp<ViewStyle>;
}

const BannerButton: React.FC<BannerButtonProps> = ({ label, labelColor, onPress, externalStyle } : BannerButtonProps) => {
  return (
    <TouchableOpacity
        accessibilityRole={'button'}
        accessible={true}
        activeOpacity={0.7}
        onPress={onPress}
        style={[styles.container, externalStyle]}
    >
      <Text style={[styles.labelStyle, { color : labelColor }]}>{label}</Text>
    </TouchableOpacity>
  )
}

export default memo(BannerButton)

const styles = StyleSheet.create({
    container : {
        width : moderateScale(110),
        height : moderateScale(38),
        backgroundColor : Colors.WHITE,
        overflow : 'hidden',
        borderRadius : moderateScale(4),
        alignItems : 'center',
        justifyContent : 'center'
    },
    labelStyle : {
        fontFamily : Fonts.CIRCULAR_STD_MEDIUM,
        fontSize : moderateScale(13.5),
        textTransform : 'capitalize'
    }
})