import { Colors, Fonts, moderateScale } from "$utils/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    labelStyle: {
        fontFamily: Fonts.CIRCULAR_STD_BOLD,
        fontSize: moderateScale(20),
        color: Colors.PRIMARY_BLACK_COLOR,
        textAlign: 'left',
        textTransform: 'capitalize',
        margin: moderateScale(10)
    }
})