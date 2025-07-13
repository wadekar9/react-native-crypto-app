import { EColors, EFonts, moderateScale } from "$constants/styles.constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    labelStyle: {
        fontFamily: EFonts.BOLD,
        fontSize: moderateScale(20),
        color: EColors.PRIMARY_BLACK_COLOR,
        textAlign: 'left',
        textTransform: 'capitalize',
        margin: moderateScale(10)
    }
})