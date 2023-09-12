import { Pressable, StyleSheet, View } from 'react-native'
import React, { memo } from 'react'
import { Colors, moderateScale } from '@utils/theme';

interface RadioButtonProps {
    selected : boolean;
    onPress : () => void;
}

const RadioButton : React.FC<RadioButtonProps> = ({ selected, onPress } : RadioButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.container,{ borderColor : selected ? Colors.PRIMARY_COLOR : Colors.BORDER_COLOR }]}>
      <View style={[styles.circle,{ backgroundColor : selected ? Colors.PRIMARY_COLOR : Colors.BORDER_COLOR }]} />
    </Pressable>
  )
}

export default memo(RadioButton);

const styles = StyleSheet.create({
    container : {
        height : moderateScale(16),
        width : moderateScale(16),
        borderRadius : moderateScale(16/2),
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth : 0.8
    },
    circle : {
        height : moderateScale(12),
        width : moderateScale(12),
        borderRadius : moderateScale(6),
    }
})